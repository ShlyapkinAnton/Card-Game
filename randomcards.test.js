/* eslint-disable */
const { it } = require("@jest/globals");
const { start } = require("./randomcards");

const numLevel = [1, 2, 3];
const arr = [
    "AceSpades",
    "KingSpades",
    "QueenSpades",
    "JackSpades",
    "10Spades",
    "9Spades",
    "8Spades",
    "7Spades",
    "6Spades",
    "AceHearts",
    "KingHearts",
    "QueenHearts",
    "JackHearts",
    "10Hearts",
    "9Hearts",
    "8Hearts",
    "7Hearts",
    "6Hearts",
    "AceDiamonds",
    "KingDiamonds",
    "QueenDiamonds",
    "JackDiamonds",
    "10Diamonds",
    "9Diamonds",
    "8Diamonds",
    "7Diamonds",
    "6Diamonds",
    "AceClubs",
    "KingClubs",
    "QueenClubs",
    "JackClubs",
    "10Clubs",
    "9Clubs",
    "8Clubs",
    "7Clubs",
    "6Clubs",
];
const arr2 = [];

describe("test to create correct cards list for different difficulty", () => {
    it("should edit the cards list for easy difficulty", () => {

        start(numLevel[0], arr, arr2);

        expect(arr2).toHaveLength(6);
    });

    it("should edit the cards list for medium difficulty", () => {

        start(numLevel[0], arr, arr2);

        expect(arr2).toHaveLength(12);
    });

    it("should edit the cards list for hard difficulty", () => {

        start(numLevel[0], arr, arr2);

        expect(arr2).toHaveLength(18);
    });
});
