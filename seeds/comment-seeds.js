const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "Test Comment 1.",
    user_id: 5,
    post_id: 3,
  },
  {
    comment_text: "Test Comment 2.",
    user_id: 2,
    post_id: 5,
  },
  {
    comment_text: "Test Comment 3.",
    user_id: 7,
    post_id: 11,
  },
  {
    comment_text: "Test Comment 4.",
    user_id: 1,
    post_id: 15,
  },
  {
    comment_text: "Test Comment 5.",
    user_id: 9,
    post_id: 15,
  },
  {
    comment_text: "Test Comment 6.",
    user_id: 13,
    post_id: 25,
  },
  {
    comment_text: "Test Comment 7.",
    user_id: 4,
    post_id: 8,
  },
  {
    comment_text: "Test Comment 8.",
    user_id: 3,
    post_id: 14,
  },
  {
    comment_text: "Test Comment 9.",
    user_id: 6,
    post_id: 18,
  },
  {
    comment_text: "Test Comment 10.",
    user_id: 6,
    post_id: 29,
  },
  {
    comment_text: "Test Comment 11.",
    user_id: 8,
    post_id: 19,
  },
  {
    comment_text: "Test Comment 12.",
    user_id: 2,
    post_id: 4,
  },
  {
    comment_text: "Test Comment 13.",
    user_id: 5,
    post_id: 7,
  },
  {
    comment_text: "Test Comment 14.",
    user_id: 15,
    post_id: 4,
  },
  {
    comment_text: "Test Comment 15.",
    user_id: 16,
    post_id: 22,
  },
  {
    comment_text: "Test Comment 16.",
    user_id: 18,
    post_id: 12,
  },
  {
    comment_text: "Test Comment 17.",
    user_id: 2,
    post_id: 16,
  },
  {
    comment_text: "Test Comment 18.",
    user_id: 2,
    post_id: 17,
  },
  {
    comment_text: "Test Comment 19.",
    user_id: 8,
    post_id: 13,
  },
  {
    comment_text: "Test Comment 20.",
    user_id: 6,
    post_id: 12,
  },
  {
    comment_text: "Test Comment 21.",
    user_id: 8,
    post_id: 5,
  },
  {
    comment_text: "Test Comment 22.",
    user_id: 5,
    post_id: 15,
  },
  {
    comment_text: "Test Comment 23.",
    user_id: 1,
    post_id: 18,
  },
  {
    comment_text: "Test Comment 24.",
    user_id: 8,
    post_id: 1,
  },
  {
    comment_text: "Test Comment 25.",
    user_id: 12,
    post_id: 12,
  },
  {
    comment_text: "Test Comment 26.",
    user_id: 15,
    post_id: 13,
  },
  {
    comment_text: "Test Comment 27.",
    user_id: 11,
    post_id: 1,
  },
  {
    comment_text: "Test Comment 28.",
    user_id: 7,
    post_id: 14,
  },
  {
    comment_text: "Test Comment 29.",
    user_id: 9,
    post_id: 18,
  },
  {
    comment_text: "Test Comment 30.",
    user_id: 3,
    post_id: 10,
  },
  {
    comment_text: "Test Comment 31.",
    user_id: 7,
    post_id: 2,
  },
  {
    comment_text: "Test Comment 32.",
    user_id: 10,
    post_id: 16,
  },
  {
    comment_text: "Test Comment 33.",
    user_id: 13,
    post_id: 19,
  },
  {
    comment_text: "Test Comment 34.",
    user_id: 5,
    post_id: 13,
  },
  {
    comment_text: "Test Comment 35.",
    user_id: 19,
    post_id: 14,
  },
  {
    comment_text: "Test Comment 36.",
    user_id: 10,
    post_id: 18,
  },
  {
    comment_text: "Test Comment 37.",
    user_id: 10,
    post_id: 1,
  },
  {
    comment_text: "Test Comment 38.",
    user_id: 18,
    post_id: 23,
  },
  {
    comment_text: "Test Comment 39.",
    user_id: 15,
    post_id: 19,
  },
  {
    comment_text: "Test Comment 40.",
    user_id: 9,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;