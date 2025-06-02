import { autoInjectable, inject } from "tsyringe";
import { IControllerBase } from "../../core/interfaces/IControllerBase";
import { ITVShowService } from "../../core/interfaces/ITVShowService";
import { Router, Request, Response } from "express";

@autoInjectable()
export class TvShowController implements IControllerBase{
    constructor(@inject("ITVShowService") private _tvShowService: ITVShowService){}

    public registerRoutes(): Router {
        const router = Router();
        router.get("/trending/tv/week", (req, res) => this.getTrendingTvShows(req, res));
        return router;
    }

    private async getTrendingTvShows(req: Request, res: Response) {
        try{
            const tvShows = await this._tvShowService.getTrendingTvShowsAsync();
            res.send(tvShows);
        } catch {
            res.status(500).send('Internal Server Error');
        }
    }
}