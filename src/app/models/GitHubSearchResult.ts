import { GitHubUser } from "./GitHubUser";

export class GitHubSearchResult {
    public incomplete_result: boolean;
    public items: GitHubUser[];
    public total_count: number;
}