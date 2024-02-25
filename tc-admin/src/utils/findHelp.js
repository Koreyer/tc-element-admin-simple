//递归查找
function findTitleRecursive(menuItems, targetName) {
    for (const menuItem of menuItems) {
        if (menuItem.name === targetName) {
            return menuItem.title;
        }

        if (menuItem.children && menuItem.children.length > 0) {
            const foundTitle = findTitleRecursive(menuItem.children, targetName);
            if (foundTitle) {
                return foundTitle;
            }
        }
    }

    return null;
}


//标签页用
function findTitles(data, title) {
    const result = [];

    function search(items, parentTitles) {
        for (const item of items) {
            const currentTitles = [...parentTitles, item.title];

            if (item.title === title) {
                result.push(...currentTitles);
                return true;
            }

            if (item.children && search(item.children, currentTitles)) {
                return true;
            }
        }

        return false;
    }

    search(data, []);

    return result.slice(0, result.lastIndexOf(title) + 1);
}


export default {
    findTitleRecursive, findTitles
}