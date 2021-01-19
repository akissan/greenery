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
    }, {
        type = "recipe",
        name = "test-grid",
        enabled = true,
        ingredients = {},
        result = utl.PR .. "test-grid"
    }, {
        type = "recipe",
        name = "seed-bed-1",
        enabled = true,
        ingredients = {{"landfill", 4}, {"wood", 4}, {utl.PR .. "sprinkler", 2}},
        result = utl.PR .. "seed-bed"
    }, {
        type = "recipe",
        name = "seed-bed-2",
        enabled = true,
        ingredients = {
            {"landfill", 4}, {"iron-plate", 4}, {utl.PR .. "sprinkler", 2}
        },
        result = utl.PR .. "seed-bed"
    }
})
