const { readJson, writeJson } = require("fs-extra")

const readDB = async filePath => {
    try {
        const file = await readJson(filePath)
        return file
    }catch (err) {
        throw new Error(err)
    }
};

const writeDB = async (filePath, content) => {
    try {
        const file = await writeJson(filePath, content)
        return file
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    readDB,
    writeDB
}