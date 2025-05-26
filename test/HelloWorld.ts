
import { ethers } from "hardhat";
import { expect } from "chai";

describe("HelloWorld", () =>{
    it("should say hi", async ()=>{
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const hello = await HelloWorld.deploy();
        await hello.waitForDeployment();

        const message = await hello.hello();

        expect(message).to.equal("Hello World")
    })
})