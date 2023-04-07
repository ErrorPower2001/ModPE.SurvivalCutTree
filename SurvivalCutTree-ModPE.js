cutTree = function (x, y, z) {
    if (Level.getTile(x, y, z) == 17 || Level.getTile(x, y, z) == 162) {
        if (Level.getData(x, y, z) == 0 || Level.getData(x, y, z) == 4 || Level.getData(x, y, z) == 8) {
            preventDefault();
            Level.dropItem(x + 0.5, y + 0.5, z + 0.5, 0, Level.getTile(x, y, z), 1, 0);
            Level.destroyBlock(x, y, z, false);
            cutTree(x, y + 1, z);
            cutTree(x + 1, y, z);
            cutTree(x - 1, y, z);
            cutTree(x, y, z + 1);
            cutTree(x, y, z - 1);
        }
        else if (Level.getData(x, y, z) == 1 || Level.getData(x, y, z) == 5 || Level.getData(x, y, z) == 9) {
            preventDefault();
            Level.dropItem(x + 0.5, y + 0.5, z + 0.5, 0, Level.getTile(x, y, z), 1, 1);
            Level.destroyBlock(x, y, z, false);
            cutTree(x, y + 1, z);
            cutTree(x + 1, y, z);
            cutTree(x - 1, y, z);
            cutTree(x, y, z + 1);
            cutTree(x, y, z - 1);
        }
        else if (Level.getData(x, y, z) == 2 || Level.getData(x, y, z) == 6 || Level.getData(x, y, z) == 10) {
            preventDefault();
            Level.dropItem(x + 0.5, y + 0.5, z + 0.5, 0, Level.getTile(x, y, z), 1, 2);
            Level.destroyBlock(x, y, z, false);
            cutTree(x, y + 1, z);
            cutTree(x + 1, y, z);
            cutTree(x - 1, y, z);
            cutTree(x, y, z + 1);
            cutTree(x, y, z - 1);
        }
        else if (Level.getData(x, y, z) == 3 || Level.getData(x, y, z) == 7 || Level.getData(x, y, z) == 11) {
            preventDefault();
            Level.dropItem(x + 0.5, y + 0.5, z + 0.5, 0, Level.getTile(x, y, z), 1, 3);
            Level.destroyBlock(x, y, z, false);
            cutTree(x, y + 1, z);
            cutTree(x + 1, y, z);
            cutTree(x - 1, y, z);
            cutTree(x, y, z + 1);
            cutTree(x, y, z - 1);
        }
    }
    if (Level.getTile(x, y, z) == 265 || Level.getTile(x, y, z) == 260 || Level.getTile(x, y, z) == 261 || Level.getTile(x, y, z) == 262 || Level.getTile(x, y, z) == 263 || Level.getTile(x, y, z) == 264) {
        preventDefault();
        Level.dropItem(x + 0.5, y + 0.5, z + 0.5, 0, Level.getTile(x, y, z), 1, 0);
        Level.destroyBlock(x, y, z, false);
        cutTree(x, y + 1, z);
        cutTree(x + 1, y, z);
        cutTree(x - 1, y, z);
        cutTree(x, y, z + 1);
        cutTree(x, y, z - 1);
    }
};



destroyBlock = function (x, y, z, side) {
    if (Player.getCarriedItem() == 0 || Player.getCarriedItem() == 271) {
        cutTree(x, y, z);
    }
};
