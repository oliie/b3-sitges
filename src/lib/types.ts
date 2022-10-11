export type Idea = {
	idea: string,
	contact: string
}
export type Answer = {
	_id?: string;
	participants: string[];
	ideas: Idea[]
	optional: string;
};

