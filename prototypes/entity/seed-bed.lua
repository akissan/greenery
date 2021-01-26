local utl = require("utl")

local e_name = "seed-bed"

local horizontal_layers = {
    {
        filename = utl.GP .. "/entity/" .. e_name .. "/" .. e_name .. "W.png",
        frame_count = 30,
        line_length = 6,
        priority = "extra-high",
        width = 256,
        height = 256,
        shift = {0, 0},
        hr_version = {
            filename = utl.GP .. "/entity/" .. e_name .. "/hr_" .. e_name ..
                "W.png",
            frame_count = 30,
            line_length = 6,
            priority = "extra-high",
            width = 512,
            height = 512,
            shift = {0, -0.5},
            scale = 0.5
        }
    }, {
        draw_as_shadow = true,
        filename = utl.GP .. "/entity/" .. e_name .. "/" .. e_name ..
            "W_shadow.png",
        priority = "high",
        width = 256,
        height = 256,
        frame_count = 1,
        line_length = 1,
        repeat_count = 30,
        shift = utl.by_pixel(32, -1)
    }
}

local vertical_layers = {
    {
        filename = utl.GP .. "/entity/" .. e_name .. "/" .. e_name .. "N.png",
        frame_count = 30,
        line_length = 6,
        priority = "extra-high",
        width = 256,
        height = 256,
        shift = {0, 0},
        hr_version = {
            filename = utl.GP .. "/entity/" .. e_name .. "/hr_" .. e_name ..
                "N.png",
            frame_count = 30,
            line_length = 6,
            priority = "extra-high",
            width = 512,
            height = 512,
            shift = {0, 0},
            scale = 0.5
        }
    }, {
        draw_as_shadow = true,
        filename = utl.GP .. "/entity/" .. e_name .. "/" .. e_name ..
            "N_shadow.png",
        priority = "high",
        width = 256,
        height = 256,
        frame_count = 1,
        line_length = 1,
        repeat_count = 30,
        shift = utl.by_pixel(-1, 1)
    }
}

data:extend({
    {
        type = "assembling-machine",
        name = utl.PR .. e_name,
        icon = utl.GP .. "/items/" .. e_name .. ".png",
        icon_size = 128,
        flags = {"placeable-neutral", "placeable-player", "player-creation"},
        minable = {mining_time = 0.2, result = utl.PR .. e_name},
        max_health = 700,
        corpse = "big-remnants",
        dying_explosion = "medium-explosion",
        fast_replaceable_group = "assembling-machine",

        alert_icon_shift = utl.by_pixel(0, -12),
        collision_box = {{-2.5 + 0.25, -0.75}, {2.5 - 0.25, 0.75}},
        selection_box = {{-2.5, -1}, {2.5, 1}},

        resistances = {{type = "electric", percent = 70}},
        open_sound = {
            filename = "__base__/sound/machine-open.ogg",
            volume = 0.85
        },
        close_sound = {
            filename = "__base__/sound/machine-close.ogg",
            volume = 0.75
        },
        vehicle_impact_sound = {
            filename = "__base__/sound/car-metal-impact.ogg",
            volume = 0.65
        },
        working_sound = {
            sound = {
                {filename = "__base__/sound/pumpjack.ogg", volume = 0.8},
                {
                    filename = "__base__/sound/assembling-machine-t3-1.ogg",
                    volume = 0.8
                }
            },
            idle_sound = {filename = "__base__/sound/pipe.ogg", volume = 0.6},
            apparent_volume = 1.5
        },
        animation = {
            north = {layers = horizontal_layers},
            west = {layers = vertical_layers},
            south = {layers = horizontal_layers},
            east = {layers = vertical_layers}
        },
        crafting_categories = {"crafting", "advanced-crafting"},
        crafting_speed = 4,
        energy_source = {
            type = "electric",
            usage_priority = "secondary-input",
            emissions_per_minute = 4
        },
        energy_usage = "3000kW",
        ingredient_count = 12,
        module_specification = {module_slots = 4},
        allowed_effects = {"consumption", "speed", "pollution"}
    }
})
