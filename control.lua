script.on_event(defines.events.on_pre_player_mined_item, function(event)
    local entity = event.entity
    local ent_name = entity.name

    if (ent_name == "gr-nest") then
        game.print("nest mined")

        local ent_inventory = entity.get_inventory(defines.inventory
                                                       .assembling_machine_output)

        -- for i_n, i_c in pairs(ent_inventory) do game.print(i_n) end

        local hsi_count = ent_inventory.get_item_count("gr-hsi");
        local hsi_q_count = ent_inventory.get_item_count("gr-hsi-q");

        local full_count = hsi_count + hsi_q_count * 5;

        local cloud = nil;

        if (full_count > 1) then cloud = "gr-hsi-cloud-01" end
        if (full_count > 5) then cloud = "gr-hsi-cloud-02" end
        if (full_count > 10) then cloud = "gr-hsi-cloud-03" end
        if (full_count > 20) then cloud = "gr-hsi-cloud-04" end
        if (full_count > 50) then cloud = "gr-hsi-cloud-05" end

        -- game.print(ent_inventory.get_item_count("gr-hsi"))
        -- print(serpent.block(ent_inventory))

        local player = game.get_player(event.player_index)

        if (cloud) then
            game.print(cloud);
            player.surface.create_entity {
                name = cloud,
                position = entity.position,
                force = "enemy"
            }
        end
    end
    -- game.print(ent_name)
end)

