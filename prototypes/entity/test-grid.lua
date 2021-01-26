local utl = require("utl")
local e_name = "test-grid"

data:extend({
    {
        type = "container",
        name = utl.PR .. e_name,
        icon = utl.GP .. "/entity/" .. e_name .. "/" .. e_name .. ".png",
        icon_size = 32,
        flags = {"placeable-neutral", "placeable-player", "player-creation"},
        minable = {mining_time = 0.2, result = utl.PR .. e_name},
        max_health = 100,
        corpse = "small-remnants",
        dying_explosion = "iron-chest-explosion",

        alert_icon_shift = utl.by_pixel(0, 0),
        collision_box = {{-2, -2}, {2, 2}},

        picture = {
            layers = {
                {
                    filename = utl.GP .. "/entity/" .. e_name .. "/" .. e_name ..
                        ".png",
                    priority = "high",
                    width = 64,
                    height = 64,
                    shift = {0, 0}
                }
            }
        },
        crafting_categories = {"crafting"},
        inventory_size = 120
    }
})
