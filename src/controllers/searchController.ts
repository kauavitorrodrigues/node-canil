import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/Pet';

export const search = (req: Request, res: Response) => {

    let query: string = req.query.q as string;
    let list = Pet.getFromName(query);

    if (!query) return res.redirect("/");

    res.render("pages/page", {
        menu: createMenuObject(""),
        list,
        query
    });

};