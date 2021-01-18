local utl = require("utl")

data:extend({
    {
        type = "recipe",
        name = "greenhouse",
        enabled = true,
        ingredients = {{"copper-plate", 1}},
        result = utl.PR .. "greenhouse"
    }, {
        type = "recipe",
        name = "test-cube",
        enabled = true,
        ingredients = {{"iron-plate", 1}},
        result = utl.PR .. "test-cube"
    }, {
        type = "recipe",
        name = "sprinkler",
        enabled = true,
        ingredients = {{"iron-stick", 2}, {"pipe", 2}},
        result = utl.PR .. "sprinkler"
    }
})
