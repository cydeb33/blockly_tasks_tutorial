Blockly.Blocks['start_block'] = {
    /**
     * Start Block.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "message0": "Bloc de départ...",
            "nextStatement": null,
            "colour": 70,
            "tooltip": "",
            "enabled": false
        });
    }
};

Blockly.JavaScript['start_block'] = function(block) {
    // Generate JavaScript for moving forward.
    return 'start_block(\'' + block.id + '\');\n';
};

Blockly.Python['start_block'] = function(block) {
    // Generate JavaScript for moving forward.
    return 'start_block()\n';

};