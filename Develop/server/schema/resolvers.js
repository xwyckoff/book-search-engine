const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = require('../models'); 

const resolvers = {
    Query: {
        user: async (parent, { userId }) => {
            return await User.findById(userId);
        }
    },

    Mutation: {
        createUser: async(parent, { username, email, password }) => {
            const createdUser = await User.create({ username, email, password });
            const token = signToken(createdUser);

            return { token, createdUser };
        },

        login: async(parent, { email, password }) => {
            const user = User.findOne({ email });

            if(!user){
                throw new AuthenticationError("No user found with that email!");
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError("Incorrect Password!");
            }

            const token = signToken(user);

            return { token, user };
        },

        saveBook: async(parent, { user, book }) => {
            return await User.findOneAndUpdate(
                {_id: user._id },
                {$addToSet: {savedBooks: book}},
                {new: true, runValidators: true}
            )
        },

        deleteBook: async(parent, {user, bookId}) => {
            return await User.findByIdAndUpdate(
                {_id: user._id},
                {$pull: {savedBooks: { bookId: bookId } }},
                {new: true}
            )
        }
    }
}