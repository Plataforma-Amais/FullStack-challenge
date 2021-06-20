/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
const connection = require('./connection');

const getClasses = async (userId) => {
  const results = await connection()
    .then((db) => db.collection('classes').aggregate([
      { $match: { teachers: userId } },
      {
        $addFields: {
          teachers: {
            $map: {
              input: '$teachers',
              in: { $toObjectId: '$$this' },
            },
          },
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'teachers',
          foreignField: '_id',
          as: 'teachers',
        },
      },
      { $unwind: '$comments' },
      {
        $lookup: {
        from: 'users',
        let: { teacher_id: { $toObjectId: '$comments.teacher' } },
        pipeline: [
           { $match: { $expr: { $eq: ['$_id', '$$teacher_id'] } } },
         ],
         as: 'comments.teacher',
        },
      },
      {
        $group: {
        _id: '$_id',
        schoolId: { $first: '$schoolId' },
        year: { $first: '$year' },
        class: { $first: '$class' },
        grade: { $first: '$grade' },
        teachers: { $first: '$teachers' },
        comments: { $push: '$comments' },
        students: { $first: '$students' },
        },
      },
      {
        $project: {
          _id: 1,
          schoolId: 1,
          year: 1,
          class: 1,
          grade: 1,
          teachers: 1,
          students: 1,
          comments: 1,
        },
      },
    ]).toArray());

  const cleanedResults = [];
  results.forEach((result) => {
    const resultTeachers = result.teachers.map((teacher) => ({
      name: teacher.name,
      email: teacher.email,
    }));
    const resultComments = result.comments.map((comment) => ({
      msg: comment.msg,
      teacher: {
        name: comment.teacher[0].name,
        email: comment.teacher[0].email,
      },
    }));
    cleanedResults.push({
      ...result,
      teachers: resultTeachers,
      comments: resultComments,
    });
  });

  return cleanedResults;
};

module.exports = {
  getClasses,
};
