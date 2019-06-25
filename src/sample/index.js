import { ApolloServer, gql } from "apollo-server";

const books = [
	{
		title: 'A',
		author: 'A. Narayanan'
	},
	{
		title: 'B',
		author: 'B. Barayanan'
	}
]

const authors = [
	{ id: 1, name: 'A. Narayanan' }, 
	{ id: 2, name: 'B. Barayanan' }
]

const typeDefs = gql`
	type Book {
		title: String
		author: Author
	}

	type Author {
		name: String
		books: [Book]
	}

	type Event {
		name: String
		date: String
		location: Location
	}

	type Location {
		name: String
		weather: WeatherInfo
	}

	type WeatherInfo {
		temperature: Float
		"Just for testing"
		description: String
	}

	type User {
		id: ID!
		name: String!
		age: Int!
	}

	interface MutationResponse {
		code: String!
		success: Boolean!
		message: String!
	}

	type Query {
		author: Author,
		getBooks: [Book]
		getAuthors: [Author]
		upcomingEvents: [Event]
	}

	type Mutation {
		updateUserAge(id: ID!, age: Int!): User
		createPost(post: PostAndMediaInput): Post
	}

	input PostAndMediaInput {
		title: String
		body: String
		mediaUrls: [String]
	}

	type UpdateUserMutationResponse implements MutationResponse {
		code: String!
		success: Boolean!
		message: String!
		user: User
	}

	type Post {
		comment: String
	}

	type LikePostMutationResponse implements MutationResponse {
		code: String!
		success: Boolean!
		message: String!
		post: Post
		user: User
	}
`;

const resolvers = {
	Query: {
		getBooks: () => books,
		getAuthors: () => authors,
		author(parent, args, context, info) {
			return authors.find(author => author.id === args.id);
		}
	},
	Author: {
		books(author) {
			return books.filter(book => book.author === author.name);
		}
	}
}

const server = new ApolloServer({
	typeDefs, 
	resolvers,
	context: async ({req}) => ({
		authScope: getScope(req.headers.authorization),
		db: await client.connect()
	})
});

(parent, _, context) => {
	if(context.authScope !== ADMIN) throw AuthenticationError('Not an admin')
	return context.db.query('SELECT * FROM table_name')
}
server.listen().then(({url}) => {
	console.log(`Server started at ${url}`)
})