const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');

const ScratchJS = function() {};

ScratchJS.prototype.getInfo = function() {
    return {
        id: "scratchjs",
        name: "ScratchJS",
        blocks: [
            {
                opcode: "alert",
                blockType: BlockType.COMMAND,
                text: "alert [INPUT]",
                arguments: {
                    INPUT: {
                        type: ArgumentType.STRING,
                    },
                },
            },
            {
                opcode: "confirm",
                blockType: BlockType.BOOLEAN,
                text: "confirm [INPUT]",
                arguments: {
                    INPUT: {
                        type: ArgumentType.STRING,
                    },
                },
            },
            {
                opcode: "prompt",
                blockType: BlockType.REPORTER,
                text: "prompt [INPUT]",
                arguments: {
                    INPUT: {
                        type: ArgumentType.STRING,
                    },
                },
            },
        ],
    };
};

ScratchJS.prototype.alert = function({INPUT}) {
    alert(INPUT);
};
ScratchJS.prototype.confirm = function({INPUT}) {
    return confirm(INPUT);
};
ScratchJS.prototype.prompt = function({INPUT}) {
    var output = prompt(INPUT);
    if (!output) {
        return '';
    } else {
        return output;
    };
};

module.exports = ScratchJS;
