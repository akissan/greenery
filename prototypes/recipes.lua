local utl = require("utl")

data:extend({
    {
        type = "recipe",
        name = "greenhouse",
        enabled = true,
        ingredients = {{"copper-plate", 1}},
        result = utl.PR .. "greenhouse"
    }
})
