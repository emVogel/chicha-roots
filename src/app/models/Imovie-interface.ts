

export interface IMovie{
    title:string;
    episode_id:number;
    director:string;
    producer:string;
    release_date:string;
    characters?:Array<string>;
    personal_rating?:string;
}

export interface IMovieResponse{
    count:number;
    results:any;

}