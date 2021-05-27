import { CreateCollection } from 'faunadb';
import { CreateQuote } from 'utils/QuoteFactory';
import { Quote } from 'types';
const faunadb = require('faunadb');
const faunaClient = new faunadb.Client({ secret: `${process.env.NEXT_PUBLIC_FAUNA_API_KEY}` });
const q = faunadb.query;

export const myFaunaClient = {
    fetchQuotes: async (): Promise<Array<Quote>> => {
        const quotesRaw = await faunaClient.query(
            q.Map(
                q.Paginate(q.Match(q.Index('author')), {size: 100}),
                q.Lambda('x', q.Get(q.Var('x')))
            )) as {data: Array<{data: Quote}>};

        return quotesRaw.data.map((x: { data: Quote }) => ({
            ...CreateQuote(x.data.id, x.data.author, x.data.quote)
        }));
    },

    createCollection: async () => {
        await faunaClient.query(
            q.CreateCollection({ name: 'test' })
        )
        // might need to store data about this too?
        // this information needs to go into a store somewhere; how to switch between collections?
        // if seed with sample data?
        // probably; if so, then use this:
        /*
        "data": {
            "id": "1",
            "author": "Augustine",
            "quote": "You have made us for Yourself, and our hearts are restless until they find their rest in You."
        }
        */
        await faunaClient.query(
            q.Create(q.Collection('test'), { data: { testField: 'testValue' } })
        );
    }
}