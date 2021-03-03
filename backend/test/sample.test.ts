function sample(): string {
	return "Hello world"
}

test("sample test", () => {
	expect(sample()).toBe("Hello world")
})