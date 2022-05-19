const cn = (...classes) => classes.filter((item) => typeof item === "string").join(" ")
export default cn
