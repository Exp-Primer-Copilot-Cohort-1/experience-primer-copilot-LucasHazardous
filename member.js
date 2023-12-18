function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["JavaScript", "HTML", "CSS"],
        address: {
            street: "123 Main St",
            city: "Boston",
            state: "MA"
        },
        getSkills: function() {
            return this.skills;
        }
    };
    return member;
}