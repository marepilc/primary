'use strict'

import { Settings } from './settings'

export function setStyle(settings: Settings) {
    const style = document.documentElement.style

    // Data Points
    style.setProperty(
        '--data-color',
        settings.dataPointsCard.defaultColor.value.value
    )
    style.setProperty(
        '--label-font-size',
        settings.dataPointsCard.fontSize.value + 'pt'
    )
}
