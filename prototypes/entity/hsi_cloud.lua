local hsi_cloud_01 = table.deepcopy(
                         data.raw["fire"]["acid-splash-fire-worm-behemoth"])

hsi_cloud_01.name = "gr-hsi-cloud-01";
hsi_cloud_01.on_damage_tick_effect.action_delivery.target_effects =
    hsi_cloud_01.on_damage_tick_effect.action_delivery.target_effects[2];

local hsi_cloud_02 = table.deepcopy(hsi_cloud_01)
hsi_cloud_02.name = "gr-hsi-cloud-02";
hsi_cloud_02.on_damage_tick_effect.action_delivery.target_effects.damage.amount =
    6

local hsi_cloud_03 = table.deepcopy(hsi_cloud_01)
hsi_cloud_03.name = "gr-hsi-cloud-03";
hsi_cloud_03.on_damage_tick_effect.action_delivery.target_effects.damage.amount =
    10

local hsi_cloud_04 = table.deepcopy(hsi_cloud_01)
hsi_cloud_04.name = "gr-hsi-cloud-04";
hsi_cloud_04.on_damage_tick_effect.action_delivery.target_effects.damage.amount =
    20

local hsi_cloud_05 = table.deepcopy(hsi_cloud_01)
hsi_cloud_05.name = "gr-hsi-cloud-05";
hsi_cloud_05.on_damage_tick_effect.action_delivery.target_effects.damage.amount =
    25

-- log(serpent.block(hsi_cloud_01))

data:extend({
    hsi_cloud_01, hsi_cloud_02, hsi_cloud_03, hsi_cloud_04, hsi_cloud_05
})
