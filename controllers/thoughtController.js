const { Thought, User } = require('../models');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then(thoughts => res.json(thoughts))
      .catch(err => res.status(500).json(err));
  },
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.id })
      .then(thought => !thought ? res.status(404).json({ message: 'No thought found with that ID' }) : res.json(thought))
      .catch(err => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then(thought => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then(user => !user ? res.status(404).json({ message: 'Thought created, but found no user with that ID' }) : res.json('Created the thought 🎉'))
      .catch(err => res.status(500).json(err));
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then(thought => !thought ? res.status(404).json({ message: 'No thought found with that ID' }) : res.json(thought))
      .catch(err => res.status(500).json(err));
  },
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.id })
      .then(thought => !thought ? res.status(404).json({ message: 'No thought found with that ID' }) : User.findOneAndUpdate(
{ thoughts: req.params.id },
{ $pull: { thoughts: req.params.id } },
{ new: true }
))
.then(user => !user ? res.status(404).json({ message: 'Thought deleted, but no user found with that ID' }) : res.json({ message: 'Thought deleted!' }))
.catch(err => res.status(500).json(err));
},
addReaction(req, res) {
Thought.findOneAndUpdate(
{ _id: req.params.thoughtId },
{ $addToSet: { reactions: req.body } },
{ new: true, runValidators: true }
)
.then(thought => !thought ? res.status(404).json({ message: 'No thought found with that ID' }) : res.json(thought))
.catch(err => res.status(500).json(err));
},
removeReaction(req, res) {
Thought.findOneAndUpdate(
{ _id: req.params.thoughtId },
{ $pull: { reactions: { reactionId: req.params.reactionId } } },
{ new: true }
)
.then(thought => !thought ? res.status(404).json({ message: 'No thought found with that ID' }) : res.json(thought))
.catch(err => res.status(500).json(err));
},
};

