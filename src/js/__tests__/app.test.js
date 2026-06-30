import { expect } from "@jest/globals";
import {Validator} from "../app";

test("regex positive", ()=>{
    const nickname = "Jav_Scri23pt";
    const result = new Validator().validateUsername(nickname);
    expect(result).toBe(true);
})

test("regex negative", ()=>{
    const nickname = "_Jav_Scri23pt";
    const result = new Validator().validateUsername(nickname);
    expect(result).toBe(false);
})

test("regex negative", ()=>{
    const nickname = "Jav_Scri234pt";
    const result = new Validator().validateUsername(nickname);
    expect(result).toBe(false);
})

test("regex negative", ()=>{
    const nickname = "Jav_Scri23pt_";
    const result = new Validator().validateUsername(nickname);
    expect(result).toBe(false);
})
