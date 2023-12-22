import { fail } from '@sveltejs/kit';

let notes = [
	{
		title: 'Test',
		content: 'Hello there!'
	}
];

export const load = () => {
	return {
		notes
	};
};

export const actions = {
	addNote: async ({ request }) => {
		const { title, content } = Object.fromEntries(await request.formData());
		if (!title) {
			return fail(503, { message: 'Title is required' });
		}
		notes.push({ title, content });
	},
	removeNote: async ({ request }) => {
		const { title, content } = Object.fromEntries(await request.formData());
		notes = notes.filter((note) => {
			if (note.title === title) {
				return note.content !== content;
			}
			return note;
		});
	}
};
