import { cloneDeep, isUndefined } from 'lodash';

const flatToTree = (rawFlat) => {
    if (rawFlat) {
        let temp = cloneDeep(rawFlat)
        let parents = temp.filter((item) => isUndefined(item.parent))
        let children = temp.filter((item) => item.parent || item.parent === 0)

        children.forEach((item) => {
            let currentNode = temp.find((node) => node.key === item.parent)

            currentNode && (currentNode.children ? currentNode.children.push(item) : currentNode.children = [item])
        });
        return parents;
    }
    return rawFlat;
}

const useLoading = () => window.dash_component_api.useDashContext().useLoading() || undefined;

export { flatToTree, useLoading };