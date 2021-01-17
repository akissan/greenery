local utl = {MN = "__greenery__", PR = "gr-", TS = 32}

utl.GP = utl.MN .. "/graphics"

function utl.by_pixel(dx, dy) return {dx * utl.TS, dy * utl.TS} end

function utl.replace(str, what, with)
    what = string.gsub(what, "[%(%)%.%+%-%*%?%[%]%^%$%%]", "%%%1") -- escape pattern
    with = string.gsub(with, "[%%]", "%%%%") -- escape replacement
    return string.gsub(str, what, with)
end

function utl.str_join(str_table, sep)
    local str = ""
    for _, str_part in pairs(str_table) do
        if str ~= "" then str = str .. sep end
        str = str .. str_part
    end
    return str
end

function utl.str_split(str, sep)
    if sep == nil then sep = "%s" end
    local t = {}
    for str in string.gmatch(str, "([^" .. sep .. "]+)") do
        table.insert(t, str)
    end
    return t
end

return utl
