let index = 0
const generateIndex = () => {
    index++
    return index
}

const technologies = {
    fontEnd: [
        {
            tech: "HTML"
        },
        {
            tech: "CSS"
        },
        {
            tech: "Javascript"
        },
        {
            tech: "JQuery"
        },
        {
            tech: "Responsive Design"
        },
        {
            tech: "Boostrap"
        },
        {
            tech: "React"
        },
    ],
    backEnd: [
        {
            tech: "Express"
        },
        {
            tech: "MySql"
        },
        {
            tech: "GraphQl"
        },
        {
            tech: "MongoDB"
        },
        {
            tech: "MVP paradigm"
        },
    ]
}

technologies.fontEnd.map((item) => {
    let x = item
    x.index = generateIndex()
    return x
});
technologies.backEnd.map((item) => {
    let x = item
    x.index = generateIndex()
    return x
});

export default technologies