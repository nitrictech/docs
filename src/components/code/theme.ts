import { Theme } from '@code-hike/lighter'

const theme: Theme = {
  name: 'Catppuccin Macchiato',
  type: 'dark',
  colors: {
    focusBorder: '#c6a0f6',
    foreground: '#cad3f5',
    disabledForeground: '#a5adcb',
    'widget.shadow': '#1e203080',
    'selection.background': '#c6a0f666',
    descriptionForeground: '#cad3f5',
    errorForeground: '#ed8796',
    'icon.foreground': '#c6a0f6',
    'sash.hoverBorder': '#c6a0f6',
    'window.activeBorder': '#00000000',
    'window.inactiveBorder': '#00000000',
    'textBlockQuote.background': '#1e2030',
    'textBlockQuote.border': '#181926',
    'textCodeBlock.background': '#24273a',
    'textLink.activeForeground': '#91d7e3',
    'textLink.foreground': '#8aadf4',
    'textPreformat.foreground': '#cad3f5',
    'textSeparator.foreground': '#c6a0f6',
    'activityBar.background': '#181926',
    'activityBar.foreground': '#c6a0f6',
    'activityBar.dropBorder': '#c6a0f633',
    'activityBar.inactiveForeground': '#6e738d',
    'activityBar.border': '#00000000',
    'activityBarBadge.background': '#c6a0f6',
    'activityBarBadge.foreground': '#181926',
    'activityBar.activeBorder': '#00000000',
    'activityBar.activeBackground': '#00000000',
    'activityBar.activeFocusBorder': '#00000000',
    'activityBarTop.foreground': '#c6a0f6',
    'activityBarTop.activeBorder': '#00000000',
    'activityBarTop.inactiveForeground': '#6e738d',
    'activityBarTop.dropBorder': '#c6a0f633',
    'badge.background': '#494d64',
    'badge.foreground': '#cad3f5',
    'breadcrumb.activeSelectionForeground': '#c6a0f6',
    'breadcrumb.background': '#24273a',
    'breadcrumb.focusForeground': '#c6a0f6',
    'breadcrumb.foreground': '#cad3f5cc',
    'breadcrumbPicker.background': '#1e2030',
    'button.background': '#c6a0f6',
    'button.foreground': '#181926',
    'button.border': '#00000000',
    'button.separator': '#00000000',
    'button.hoverBackground': '#dac1f9',
    'button.secondaryForeground': '#cad3f5',
    'button.secondaryBackground': '#5b6078',
    'button.secondaryHoverBackground': '#6a708c',
    'checkbox.background': '#494d64',
    'checkbox.border': '#00000000',
    'checkbox.foreground': '#c6a0f6',
    'dropdown.background': '#1e2030',
    'dropdown.listBackground': '#5b6078',
    'dropdown.border': '#c6a0f6',
    'dropdown.foreground': '#cad3f5',
    'debugToolBar.background': '#181926',
    'debugToolBar.border': '#00000000',
    'debugExceptionWidget.background': '#181926',
    'debugExceptionWidget.border': '#c6a0f6',
    'debugTokenExpression.number': '#f5a97f',
    'debugTokenExpression.boolean': '#c6a0f6',
    'debugTokenExpression.string': '#a6da95',
    'debugTokenExpression.error': '#ed8796',
    'debugIcon.breakpointForeground': '#ed8796',
    'debugIcon.breakpointDisabledForeground': '#ed879699',
    'debugIcon.breakpointUnverifiedForeground': '#a47487',
    'debugIcon.breakpointCurrentStackframeForeground': '#5b6078',
    'debugIcon.breakpointStackframeForeground': '#5b6078',
    'debugIcon.startForeground': '#a6da95',
    'debugIcon.pauseForeground': '#8aadf4',
    'debugIcon.stopForeground': '#ed8796',
    'debugIcon.disconnectForeground': '#5b6078',
    'debugIcon.restartForeground': '#8bd5ca',
    'debugIcon.stepOverForeground': '#c6a0f6',
    'debugIcon.stepIntoForeground': '#cad3f5',
    'debugIcon.stepOutForeground': '#cad3f5',
    'debugIcon.continueForeground': '#a6da95',
    'debugIcon.stepBackForeground': '#5b6078',
    'debugConsole.infoForeground': '#8aadf4',
    'debugConsole.warningForeground': '#f5a97f',
    'debugConsole.errorForeground': '#ed8796',
    'debugConsole.sourceForeground': '#f4dbd6',
    'debugConsoleInputIcon.foreground': '#cad3f5',
    'diffEditor.border': '#5b6078',
    'diffEditor.insertedTextBackground': '#a6da951a',
    'diffEditor.removedTextBackground': '#ed87961a',
    'diffEditor.insertedLineBackground': '#a6da9526',
    'diffEditor.removedLineBackground': '#ed879626',
    'diffEditor.diagonalFill': '#5b607899',
    'diffEditorOverview.insertedForeground': '#a6da95cc',
    'diffEditorOverview.removedForeground': '#ed8796cc',
    'editor.background': '#272140ff',
    'editor.findMatchBackground': '#604456',
    'editor.findMatchBorder': '#ed879633',
    'editor.findMatchHighlightBackground': '#455c6d',
    'editor.findMatchHighlightBorder': '#91d7e333',
    'editor.findRangeHighlightBackground': '#455c6d',
    'editor.findRangeHighlightBorder': '#91d7e333',
    'editor.foldBackground': '#91d7e340',
    'editor.foreground': '#cad3f5',
    'editor.hoverHighlightBackground': '#91d7e340',
    'editor.lineHighlightBackground': '#cad3f512',
    'editor.lineHighlightBorder': '#00000000',
    'editor.rangeHighlightBackground': '#00000040',
    'editor.rangeHighlightBorder': '#00000000',
    'editor.selectionBackground': '#939ab740',
    'editor.selectionHighlightBackground': '#939ab733',
    'editor.selectionHighlightBorder': '#939ab733',
    'editor.wordHighlightBackground': '#939ab733',
    'editorBracketMatch.background': '#939ab71a',
    'editorBracketMatch.border': '#939ab7',
    'editorCodeLens.foreground': '#8087a2',
    'editorCursor.background': '#24273a',
    'editorCursor.foreground': '#f4dbd6',
    'editorGroup.border': '#5b6078',
    'editorGroup.dropBackground': '#c6a0f633',
    'editorGroup.emptyBackground': '#24273a',
    'editorGroupHeader.tabsBackground': '#181926',
    'editorGutter.addedBackground': '#a6da95',
    'editorGutter.background': '#24273a',
    'editorGutter.commentRangeForeground': '#363a4f',
    'editorGutter.commentGlyphForeground': '#c6a0f6',
    'editorGutter.deletedBackground': '#ed8796',
    'editorGutter.foldingControlForeground': '#939ab7',
    'editorGutter.modifiedBackground': '#eed49f',
    'editorHoverWidget.background': '#1e2030',
    'editorHoverWidget.border': '#5b6078',
    'editorHoverWidget.foreground': '#cad3f5',
    'editorIndentGuide.activeBackground': '#5b6078',
    'editorIndentGuide.background': '#494d64',
    'editorInlayHint.foreground': '#5b6078',
    'editorInlayHint.background': '#1e2030bf',
    'editorInlayHint.typeForeground': '#b8c0e0',
    'editorInlayHint.typeBackground': '#1e2030bf',
    'editorInlayHint.parameterForeground': '#a5adcb',
    'editorInlayHint.parameterBackground': '#1e2030bf',
    'editorLineNumber.activeForeground': '#c6a0f6',
    'editorLineNumber.foreground': '#8087a2',
    'editorLink.activeForeground': '#c6a0f6',
    'editorMarkerNavigation.background': '#1e2030',
    'editorMarkerNavigationError.background': '#ed8796',
    'editorMarkerNavigationInfo.background': '#8aadf4',
    'editorMarkerNavigationWarning.background': '#f5a97f',
    'editorOverviewRuler.background': '#1e2030',
    'editorOverviewRuler.border': '#cad3f512',
    'editorOverviewRuler.modifiedForeground': '#eed49f',
    'editorRuler.foreground': '#5b6078',
    'editor.stackFrameHighlightBackground': '#eed49f26',
    'editor.focusedStackFrameHighlightBackground': '#a6da9526',
    'editorStickyScrollHover.background': '#363a4f',
    'editorSuggestWidget.background': '#1e2030',
    'editorSuggestWidget.border': '#5b6078',
    'editorSuggestWidget.foreground': '#cad3f5',
    'editorSuggestWidget.highlightForeground': '#c6a0f6',
    'editorSuggestWidget.selectedBackground': '#363a4f',
    'editorWhitespace.foreground': '#939ab766',
    'editorWidget.background': '#1e2030',
    'editorWidget.foreground': '#cad3f5',
    'editorWidget.resizeBorder': '#5b6078',
    'editorLightBulb.foreground': '#eed49f',
    'editorError.foreground': '#ed8796',
    'editorError.border': '#00000000',
    'editorError.background': '#00000000',
    'editorWarning.foreground': '#f5a97f',
    'editorWarning.border': '#00000000',
    'editorWarning.background': '#00000000',
    'editorInfo.foreground': '#8aadf4',
    'editorInfo.border': '#00000000',
    'editorInfo.background': '#00000000',
    'problemsErrorIcon.foreground': '#ed8796',
    'problemsInfoIcon.foreground': '#8aadf4',
    'problemsWarningIcon.foreground': '#f5a97f',
    'extensionButton.prominentForeground': '#181926',
    'extensionButton.prominentBackground': '#c6a0f6',
    'extensionButton.separator': '#24273a',
    'extensionButton.prominentHoverBackground': '#dac1f9',
    'extensionBadge.remoteBackground': '#8aadf4',
    'extensionBadge.remoteForeground': '#181926',
    'extensionIcon.starForeground': '#eed49f',
    'extensionIcon.verifiedForeground': '#a6da95',
    'extensionIcon.preReleaseForeground': '#5b6078',
    'extensionIcon.sponsorForeground': '#f5bde6',
    'gitDecoration.addedResourceForeground': '#a6da95',
    'gitDecoration.conflictingResourceForeground': '#c6a0f6',
    'gitDecoration.deletedResourceForeground': '#ed8796',
    'gitDecoration.ignoredResourceForeground': '#6e738d',
    'gitDecoration.modifiedResourceForeground': '#eed49f',
    'gitDecoration.stageDeletedResourceForeground': '#ed8796',
    'gitDecoration.stageModifiedResourceForeground': '#eed49f',
    'gitDecoration.submoduleResourceForeground': '#8aadf4',
    'gitDecoration.untrackedResourceForeground': '#a6da95',
    'input.background': '#363a4f',
    'input.border': '#00000000',
    'input.foreground': '#cad3f5',
    'input.placeholderForeground': '#cad3f573',
    'inputOption.activeBackground': '#5b6078',
    'inputOption.activeBorder': '#c6a0f6',
    'inputOption.activeForeground': '#cad3f5',
    'inputValidation.errorBackground': '#ed8796',
    'inputValidation.errorBorder': '#18192633',
    'inputValidation.errorForeground': '#181926',
    'inputValidation.infoBackground': '#8aadf4',
    'inputValidation.infoBorder': '#18192633',
    'inputValidation.infoForeground': '#181926',
    'inputValidation.warningBackground': '#f5a97f',
    'inputValidation.warningBorder': '#18192633',
    'inputValidation.warningForeground': '#181926',
    'list.activeSelectionBackground': '#363a4f',
    'list.activeSelectionForeground': '#cad3f5',
    'list.dropBackground': '#c6a0f633',
    'list.focusBackground': '#363a4f',
    'list.focusForeground': '#cad3f5',
    'list.focusOutline': '#00000000',
    'list.highlightForeground': '#c6a0f6',
    'list.hoverBackground': '#363a4f80',
    'list.hoverForeground': '#cad3f5',
    'list.inactiveSelectionBackground': '#363a4f',
    'list.inactiveSelectionForeground': '#cad3f5',
    'list.warningForeground': '#f5a97f',
    'listFilterWidget.background': '#494d64',
    'listFilterWidget.noMatchesOutline': '#ed8796',
    'listFilterWidget.outline': '#00000000',
    'tree.indentGuidesStroke': '#939ab7',
    'tree.inactiveIndentGuidesStroke': '#494d64',
    'menu.background': '#24273a',
    'menu.border': '#24273a80',
    'menu.foreground': '#cad3f5',
    'menu.selectionBackground': '#5b6078',
    'menu.selectionBorder': '#00000000',
    'menu.selectionForeground': '#cad3f5',
    'menu.separatorBackground': '#5b6078',
    'menubar.selectionBackground': '#494d64',
    'menubar.selectionForeground': '#cad3f5',
    'merge.commonContentBackground': '#494d64',
    'merge.commonHeaderBackground': '#5b6078',
    'merge.currentContentBackground': '#a6da9533',
    'merge.currentHeaderBackground': '#a6da9566',
    'merge.incomingContentBackground': '#8aadf433',
    'merge.incomingHeaderBackground': '#8aadf466',
    'minimap.background': '#1e203080',
    'minimap.findMatchHighlight': '#91d7e34d',
    'minimap.selectionHighlight': '#5b6078bf',
    'minimap.selectionOccurrenceHighlight': '#5b6078bf',
    'minimap.warningHighlight': '#f5a97fbf',
    'minimap.errorHighlight': '#ed8796bf',
    'minimapSlider.background': '#c6a0f633',
    'minimapSlider.hoverBackground': '#c6a0f666',
    'minimapSlider.activeBackground': '#c6a0f699',
    'minimapGutter.addedBackground': '#a6da95bf',
    'minimapGutter.deletedBackground': '#ed8796bf',
    'minimapGutter.modifiedBackground': '#eed49fbf',
    'notificationCenter.border': '#c6a0f6',
    'notificationCenterHeader.foreground': '#cad3f5',
    'notificationCenterHeader.background': '#1e2030',
    'notificationToast.border': '#c6a0f6',
    'notifications.foreground': '#cad3f5',
    'notifications.background': '#1e2030',
    'notifications.border': '#c6a0f6',
    'notificationLink.foreground': '#8aadf4',
    'notificationsErrorIcon.foreground': '#ed8796',
    'notificationsWarningIcon.foreground': '#f5a97f',
    'notificationsInfoIcon.foreground': '#8aadf4',
    'panel.background': '#24273a',
    'panel.border': '#5b6078',
    'panelSection.border': '#5b6078',
    'panelSection.dropBackground': '#c6a0f633',
    'panelTitle.activeBorder': '#c6a0f6',
    'panelTitle.activeForeground': '#cad3f5',
    'panelTitle.inactiveForeground': '#a5adcb',
    'peekView.border': '#c6a0f6',
    'peekViewEditor.background': '#1e2030',
    'peekViewEditorGutter.background': '#1e2030',
    'peekViewEditor.matchHighlightBackground': '#91d7e34d',
    'peekViewEditor.matchHighlightBorder': '#00000000',
    'peekViewResult.background': '#1e2030',
    'peekViewResult.fileForeground': '#cad3f5',
    'peekViewResult.lineForeground': '#cad3f5',
    'peekViewResult.matchHighlightBackground': '#91d7e34d',
    'peekViewResult.selectionBackground': '#363a4f',
    'peekViewResult.selectionForeground': '#cad3f5',
    'peekViewTitle.background': '#24273a',
    'peekViewTitleDescription.foreground': '#b8c0e0b3',
    'peekViewTitleLabel.foreground': '#cad3f5',
    'pickerGroup.border': '#c6a0f6',
    'pickerGroup.foreground': '#c6a0f6',
    'progressBar.background': '#c6a0f6',
    'scrollbar.shadow': '#181926',
    'scrollbarSlider.activeBackground': '#363a4f66',
    'scrollbarSlider.background': '#5b607880',
    'scrollbarSlider.hoverBackground': '#6e738d',
    'settings.focusedRowBackground': '#5b607833',
    'settings.headerForeground': '#cad3f5',
    'settings.modifiedItemIndicator': '#c6a0f6',
    'settings.dropdownBackground': '#494d64',
    'settings.dropdownListBorder': '#00000000',
    'settings.textInputBackground': '#494d64',
    'settings.textInputBorder': '#00000000',
    'settings.numberInputBackground': '#494d64',
    'settings.numberInputBorder': '#00000000',
    'sideBar.background': '#1e2030',
    'sideBar.dropBackground': '#c6a0f633',
    'sideBar.foreground': '#cad3f5',
    'sideBar.border': '#00000000',
    'sideBarSectionHeader.background': '#1e2030',
    'sideBarSectionHeader.foreground': '#cad3f5',
    'sideBarTitle.foreground': '#c6a0f6',
    'banner.background': '#494d64',
    'banner.foreground': '#cad3f5',
    'banner.iconForeground': '#cad3f5',
    'statusBar.background': '#181926',
    'statusBar.foreground': '#cad3f5',
    'statusBar.border': '#00000000',
    'statusBar.noFolderBackground': '#181926',
    'statusBar.noFolderForeground': '#cad3f5',
    'statusBar.noFolderBorder': '#00000000',
    'statusBar.debuggingBackground': '#f5a97f',
    'statusBar.debuggingForeground': '#181926',
    'statusBar.debuggingBorder': '#00000000',
    'statusBarItem.remoteBackground': '#8aadf4',
    'statusBarItem.remoteForeground': '#181926',
    'statusBarItem.activeBackground': '#5b607866',
    'statusBarItem.hoverBackground': '#5b607833',
    'statusBarItem.prominentForeground': '#c6a0f6',
    'statusBarItem.prominentBackground': '#00000000',
    'statusBarItem.prominentHoverBackground': '#5b607833',
    'statusBarItem.errorForeground': '#ed8796',
    'statusBarItem.errorBackground': '#00000000',
    'statusBarItem.warningForeground': '#f5a97f',
    'statusBarItem.warningBackground': '#00000000',
    'commandCenter.foreground': '#b8c0e0',
    'commandCenter.inactiveForeground': '#b8c0e0',
    'commandCenter.activeForeground': '#c6a0f6',
    'commandCenter.background': '#1e2030',
    'commandCenter.activeBackground': '#5b607833',
    'commandCenter.border': '#00000000',
    'commandCenter.inactiveBorder': '#00000000',
    'commandCenter.activeBorder': '#c6a0f6',
    'tab.activeBackground': '#24273a',
    'tab.activeBorder': '#00000000',
    'tab.activeBorderTop': '#c6a0f6',
    'tab.activeForeground': '#c6a0f6',
    'tab.activeModifiedBorder': '#eed49f',
    'tab.border': '#1e2030',
    'tab.hoverBackground': '#2e324a',
    'tab.hoverBorder': '#00000000',
    'tab.hoverForeground': '#c6a0f6',
    'tab.inactiveBackground': '#1e2030',
    'tab.inactiveForeground': '#6e738d',
    'tab.inactiveModifiedBorder': '#eed49f4d',
    'tab.lastPinnedBorder': '#c6a0f6',
    'tab.unfocusedActiveBackground': '#1e2030',
    'tab.unfocusedActiveBorder': '#00000000',
    'tab.unfocusedActiveBorderTop': '#c6a0f64d',
    'tab.unfocusedInactiveBackground': '#141620',
    'terminal.foreground': '#cad3f5',
    'terminal.ansiBlack': '#a5adcb',
    'terminal.ansiRed': '#ed8796',
    'terminal.ansiGreen': '#a6da95',
    'terminal.ansiYellow': '#eed49f',
    'terminal.ansiBlue': '#8aadf4',
    'terminal.ansiMagenta': '#f5bde6',
    'terminal.ansiCyan': '#91d7e3',
    'terminal.ansiWhite': '#b8c0e0',
    'terminal.ansiBrightBlack': '#5b6078',
    'terminal.ansiBrightRed': '#ed8796',
    'terminal.ansiBrightGreen': '#a6da95',
    'terminal.ansiBrightYellow': '#eed49f',
    'terminal.ansiBrightBlue': '#8aadf4',
    'terminal.ansiBrightMagenta': '#f5bde6',
    'terminal.ansiBrightCyan': '#91d7e3',
    'terminal.ansiBrightWhite': '#494d64',
    'terminal.selectionBackground': '#5b6078',
    'terminal.inactiveSelectionBackground': '#5b607880',
    'terminalCursor.background': '#24273a',
    'terminalCursor.foreground': '#f4dbd6',
    'terminal.border': '#5b6078',
    'terminal.dropBackground': '#c6a0f633',
    'terminal.tab.activeBorder': '#c6a0f6',
    'terminalCommandDecoration.defaultBackground': '#5b6078',
    'terminalCommandDecoration.successBackground': '#a6da95',
    'terminalCommandDecoration.errorBackground': '#ed8796',
    'titleBar.activeBackground': '#181926',
    'titleBar.activeForeground': '#cad3f5',
    'titleBar.inactiveBackground': '#181926',
    'titleBar.inactiveForeground': '#cad3f580',
    'titleBar.border': '#00000000',
    'welcomePage.tileBackground': '#1e2030',
    'welcomePage.progress.background': '#181926',
    'welcomePage.progress.foreground': '#c6a0f6',
    'walkThrough.embeddedEditorBackground': '#24273a4d',
    'symbolIcon.textForeground': '#cad3f5',
    'symbolIcon.arrayForeground': '#f5a97f',
    'symbolIcon.booleanForeground': '#c6a0f6',
    'symbolIcon.classForeground': '#eed49f',
    'symbolIcon.colorForeground': '#f5bde6',
    'symbolIcon.constantForeground': '#f5a97f',
    'symbolIcon.constructorForeground': '#b7bdf8',
    'symbolIcon.enumeratorForeground': '#eed49f',
    'symbolIcon.enumeratorMemberForeground': '#eed49f',
    'symbolIcon.eventForeground': '#f5bde6',
    'symbolIcon.fieldForeground': '#cad3f5',
    'symbolIcon.fileForeground': '#c6a0f6',
    'symbolIcon.folderForeground': '#c6a0f6',
    'symbolIcon.functionForeground': '#8aadf4',
    'symbolIcon.interfaceForeground': '#eed49f',
    'symbolIcon.keyForeground': '#8bd5ca',
    'symbolIcon.keywordForeground': '#c6a0f6',
    'symbolIcon.methodForeground': '#8aadf4',
    'symbolIcon.moduleForeground': '#cad3f5',
    'symbolIcon.namespaceForeground': '#eed49f',
    'symbolIcon.nullForeground': '#ee99a0',
    'symbolIcon.numberForeground': '#f5a97f',
    'symbolIcon.objectForeground': '#eed49f',
    'symbolIcon.operatorForeground': '#8bd5ca',
    'symbolIcon.packageForeground': '#f0c6c6',
    'symbolIcon.propertyForeground': '#ee99a0',
    'symbolIcon.referenceForeground': '#eed49f',
    'symbolIcon.snippetForeground': '#f0c6c6',
    'symbolIcon.stringForeground': '#a6da95',
    'symbolIcon.structForeground': '#8bd5ca',
    'symbolIcon.typeParameterForeground': '#ee99a0',
    'symbolIcon.unitForeground': '#cad3f5',
    'symbolIcon.variableForeground': '#cad3f5',
    'charts.foreground': '#cad3f5',
    'charts.lines': '#b8c0e0',
    'charts.red': '#ed8796',
    'charts.blue': '#8aadf4',
    'charts.yellow': '#eed49f',
    'charts.orange': '#f5a97f',
    'charts.green': '#a6da95',
    'charts.purple': '#c6a0f6',
    'errorLens.errorBackground': '#ed879626',
    'errorLens.errorBackgroundLight': '#ed879626',
    'errorLens.errorForeground': '#ed8796',
    'errorLens.errorForegroundLight': '#ed8796',
    'errorLens.errorMessageBackground': '#ed879626',
    'errorLens.hintBackground': '#a6da9526',
    'errorLens.hintBackgroundLight': '#a6da9526',
    'errorLens.hintForeground': '#a6da95',
    'errorLens.hintForegroundLight': '#a6da95',
    'errorLens.hintMessageBackground': '#a6da9526',
    'errorLens.infoBackground': '#8aadf426',
    'errorLens.infoBackgroundLight': '#8aadf426',
    'errorLens.infoForeground': '#8aadf4',
    'errorLens.infoForegroundLight': '#8aadf4',
    'errorLens.infoMessageBackground': '#8aadf426',
    'errorLens.statusBarErrorForeground': '#ed8796',
    'errorLens.statusBarHintForeground': '#a6da95',
    'errorLens.statusBarIconErrorForeground': '#ed8796',
    'errorLens.statusBarIconWarningForeground': '#f5a97f',
    'errorLens.statusBarInfoForeground': '#8aadf4',
    'errorLens.statusBarWarningForeground': '#f5a97f',
    'errorLens.warningBackground': '#f5a97f26',
    'errorLens.warningBackgroundLight': '#f5a97f26',
    'errorLens.warningForeground': '#f5a97f',
    'errorLens.warningForegroundLight': '#f5a97f',
    'errorLens.warningMessageBackground': '#f5a97f26',
    'issues.closed': '#c6a0f6',
    'issues.newIssueDecoration': '#f4dbd6',
    'issues.open': '#a6da95',
    'pullRequests.closed': '#ed8796',
    'pullRequests.draft': '#939ab7',
    'pullRequests.merged': '#c6a0f6',
    'pullRequests.notification': '#cad3f5',
    'pullRequests.open': '#a6da95',
    'gitlens.gutterBackgroundColor': '#363a4f4d',
    'gitlens.gutterForegroundColor': '#cad3f5',
    'gitlens.gutterUncommittedForegroundColor': '#c6a0f6',
    'gitlens.trailingLineBackgroundColor': '#00000000',
    'gitlens.trailingLineForegroundColor': '#cad3f54d',
    'gitlens.lineHighlightBackgroundColor': '#c6a0f626',
    'gitlens.lineHighlightOverviewRulerColor': '#c6a0f6cc',
    'gitlens.openAutolinkedIssueIconColor': '#a6da95',
    'gitlens.closedAutolinkedIssueIconColor': '#c6a0f6',
    'gitlens.closedPullRequestIconColor': '#ed8796',
    'gitlens.openPullRequestIconColor': '#a6da95',
    'gitlens.mergedPullRequestIconColor': '#c6a0f6',
    'gitlens.unpublishedChangesIconColor': '#a6da95',
    'gitlens.unpublishedCommitIconColor': '#a6da95',
    'gitlens.unpulledChangesIconColor': '#f5a97f',
    'gitlens.decorations.branchAheadForegroundColor': '#a6da95',
    'gitlens.decorations.branchBehindForegroundColor': '#f5a97f',
    'gitlens.decorations.branchDivergedForegroundColor': '#eed49f',
    'gitlens.decorations.branchUnpublishedForegroundColor': '#a6da95',
    'gitlens.decorations.branchMissingUpstreamForegroundColor': '#f5a97f',
    'gitlens.decorations.statusMergingOrRebasingConflictForegroundColor':
      '#ee99a0',
    'gitlens.decorations.statusMergingOrRebasingForegroundColor': '#eed49f',
    'gitlens.decorations.workspaceRepoMissingForegroundColor': '#a5adcb',
    'gitlens.decorations.workspaceCurrentForegroundColor': '#c6a0f6',
    'gitlens.decorations.workspaceRepoOpenForegroundColor': '#c6a0f6',
    'gitlens.decorations.worktreeHasUncommittedChangesForegroundColor':
      '#f5a97f',
    'gitlens.decorations.worktreeMissingForegroundColor': '#ee99a0',
    'gitlens.graphLane1Color': '#c6a0f6',
    'gitlens.graphLane2Color': '#eed49f',
    'gitlens.graphLane3Color': '#8aadf4',
    'gitlens.graphLane4Color': '#f0c6c6',
    'gitlens.graphLane5Color': '#a6da95',
    'gitlens.graphLane6Color': '#b7bdf8',
    'gitlens.graphLane7Color': '#f4dbd6',
    'gitlens.graphLane8Color': '#ed8796',
    'gitlens.graphLane9Color': '#8bd5ca',
    'gitlens.graphLane10Color': '#f5bde6',
    'gitlens.graphChangesColumnAddedColor': '#a6da95',
    'gitlens.graphChangesColumnDeletedColor': '#ed8796',
    'gitlens.graphMinimapMarkerHeadColor': '#a6da95',
    'gitlens.graphScrollMarkerHeadColor': '#a6da95',
    'gitlens.graphMinimapMarkerUpstreamColor': '#96d382',
    'gitlens.graphScrollMarkerUpstreamColor': '#96d382',
    'gitlens.graphMinimapMarkerHighlightsColor': '#eed49f',
    'gitlens.graphScrollMarkerHighlightsColor': '#eed49f',
    'gitlens.graphMinimapMarkerLocalBranchesColor': '#8aadf4',
    'gitlens.graphScrollMarkerLocalBranchesColor': '#8aadf4',
    'gitlens.graphMinimapMarkerRemoteBranchesColor': '#739df2',
    'gitlens.graphScrollMarkerRemoteBranchesColor': '#739df2',
    'gitlens.graphMinimapMarkerStashesColor': '#c6a0f6',
    'gitlens.graphScrollMarkerStashesColor': '#c6a0f6',
    'gitlens.graphMinimapMarkerTagsColor': '#f0c6c6',
    'gitlens.graphScrollMarkerTagsColor': '#f0c6c6',
    'editorBracketHighlight.foreground1': '#ed8796',
    'editorBracketHighlight.foreground2': '#f5a97f',
    'editorBracketHighlight.foreground3': '#eed49f',
    'editorBracketHighlight.foreground4': '#a6da95',
    'editorBracketHighlight.foreground5': '#7dc4e4',
    'editorBracketHighlight.foreground6': '#c6a0f6',
    'editorBracketHighlight.unexpectedBracket.foreground': '#ee99a0',
    'button.secondaryBorder': '#c6a0f6',
    'table.headerBackground': '#363a4f',
    'table.headerForeground': '#cad3f5',
    'list.focusAndSelectionBackground': '#494d64',
  },
  semanticHighlighting: true,
  semanticTokenColors: {
    enumMember: {
      foreground: '#8bd5ca',
    },
    selfKeyword: {
      foreground: '#ed8796',
    },
    boolean: {
      foreground: '#f5a97f',
    },
    number: {
      foreground: '#f5a97f',
    },
    'variable.defaultLibrary': {
      foreground: '#ee99a0',
    },
    'class:python': {
      foreground: '#eed49f',
    },
    'class.builtin:python': {
      foreground: '#c6a0f6',
    },
    'variable.typeHint:python': {
      foreground: '#eed49f',
    },
    'function.decorator:python': {
      foreground: '#f5a97f',
    },
    'variable.readonly:javascript': {
      foreground: '#cad3f5',
    },
    'variable.readonly:typescript': {
      foreground: '#cad3f5',
    },
    'property.readonly:javascript': {
      foreground: '#cad3f5',
    },
    'property.readonly:typescript': {
      foreground: '#cad3f5',
    },
    'variable.readonly:javascriptreact': {
      foreground: '#cad3f5',
    },
    'variable.readonly:typescriptreact': {
      foreground: '#cad3f5',
    },
    'property.readonly:javascriptreact': {
      foreground: '#cad3f5',
    },
    'property.readonly:typescriptreact': {
      foreground: '#cad3f5',
    },
    'variable.readonly:scala': {
      foreground: '#cad3f5',
    },
    'type.defaultLibrary:go': {
      foreground: '#c6a0f6',
    },
    'variable.readonly.defaultLibrary:go': {
      foreground: '#c6a0f6',
    },
    tomlArrayKey: {
      foreground: '#8aadf4',
      fontStyle: '',
    },
    tomlTableKey: {
      foreground: '#8aadf4',
      fontStyle: '',
    },
    'builtinAttribute.attribute.library:rust': {
      foreground: '#8aadf4',
    },
    'generic.attribute:rust': {
      foreground: '#cad3f5',
    },
    'constant.builtin.readonly:nix': {
      foreground: '#c6a0f6',
    },
    heading: {
      foreground: '#ed8796',
    },
    'text.emph': {
      foreground: '#ed8796',
      fontStyle: 'italic',
    },
    'text.strong': {
      foreground: '#ed8796',
      fontStyle: 'bold',
    },
    'text.math': {
      foreground: '#f0c6c6',
    },
    pol: {
      foreground: '#f0c6c6',
    },
  },
  tokenColors: [
    {
      name: 'Basic text & variable names (incl. leading punctuation)',
      scope: [
        'text',
        'source',
        'variable.other.readwrite',
        'punctuation.definition.variable',
      ],
      settings: {
        foreground: '#cad3f5',
      },
    },
    {
      name: 'Parentheses, Brackets, Braces',
      scope: 'punctuation',
      settings: {
        foreground: '#939ab7',
        fontStyle: '',
      },
    },
    {
      name: 'Comments',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        foreground: '#6e738d',
        fontStyle: 'italic',
      },
    },
    {
      scope: ['string', 'punctuation.definition.string'],
      settings: {
        foreground: '#a6da95',
      },
    },
    {
      scope: 'constant.character.escape',
      settings: {
        foreground: '#f5bde6',
      },
    },
    {
      name: 'Booleans, constants, numbers',
      scope: [
        'constant.numeric',
        'variable.other.constant',
        'entity.name.constant',
        'constant.language.boolean',
        'constant.language.false',
        'constant.language.true',
        'keyword.other.unit.user-defined',
        'keyword.other.unit.suffix.floating-point',
      ],
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      scope: [
        'keyword',
        'keyword.operator.word',
        'keyword.operator.new',
        'variable.language.super',
        'support.type.primitive',
        'storage.type',
        'storage.modifier',
        'punctuation.definition.keyword',
      ],
      settings: {
        foreground: '#bf89ebff',
        fontStyle: 'normal',
      },
    },
    {
      scope: 'entity.name.tag.documentation',
      settings: {
        foreground: '#c6a0f6',
      },
    },
    {
      name: 'Punctuation',
      scope: [
        'keyword.operator',
        'punctuation.accessor',
        'punctuation.definition.generic',
        'meta.function.closure punctuation.section.parameters',
        'punctuation.definition.tag',
        'punctuation.separator.key-value',
      ],
      settings: {
        foreground: '#66e0ccff',
        fontStyle: 'normal',
      },
    },
    {
      scope: [
        'entity.name.function',
        'meta.function-call.method',
        'support.function',
        'support.function.misc',
        'variable.function',
      ],
      settings: {
        foreground: '#7ea2f7ff',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Classes',
      scope: [
        'entity.name.class',
        'entity.other.inherited-class',
        'support.class',
        'meta.function-call.constructor',
        'entity.name.struct',
      ],
      settings: {
        foreground: '#eed49f',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Enum',
      scope: 'entity.name.enum',
      settings: {
        foreground: '#eed49f',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Enum member',
      scope: [
        'meta.enum variable.other.readwrite',
        'variable.other.enummember',
      ],
      settings: {
        foreground: '#8bd5ca',
      },
    },
    {
      name: 'Object properties',
      scope: 'meta.property.object',
      settings: {
        foreground: '#8bd5ca',
      },
    },
    {
      name: 'Types',
      scope: [
        'meta.type',
        'meta.type-alias',
        'support.type',
        'entity.name.type',
      ],
      settings: {
        foreground: '#eed49f',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Decorators',
      scope: [
        'meta.annotation variable.function',
        'meta.annotation variable.annotation.function',
        'meta.annotation punctuation.definition.annotation',
        'meta.decorator',
        'punctuation.decorator',
      ],
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      scope: ['variable.parameter', 'meta.function.parameters'],
      settings: {
        foreground: '#ee8d94ff',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Built-ins',
      scope: ['constant.language', 'support.function.builtin'],
      settings: {
        foreground: '#ed8796',
      },
    },
    {
      scope: 'entity.other.attribute-name.documentation',
      settings: {
        foreground: '#ed8796',
      },
    },
    {
      name: 'Preprocessor directives',
      scope: ['keyword.control.directive', 'punctuation.definition.directive'],
      settings: {
        foreground: '#eed49f',
      },
    },
    {
      name: 'Type parameters',
      scope: 'punctuation.definition.typeparameters',
      settings: {
        foreground: '#91d7e3',
      },
    },
    {
      name: 'Namespaces',
      scope: 'entity.name.namespace',
      settings: {
        foreground: '#eed49f',
      },
    },
    {
      name: 'Property names (left hand assignments in json/yaml/css)',
      scope: 'support.type.property-name.css',
      settings: {
        foreground: '#8aadf4',
        fontStyle: '',
      },
    },
    {
      name: 'This/Self keyword',
      scope: [
        'variable.language.this',
        'variable.language.this punctuation.definition.variable',
      ],
      settings: {
        foreground: '#ed8796',
      },
    },
    {
      name: 'Object properties',
      scope: 'variable.object.property',
      settings: {
        foreground: '#cad3f5',
      },
    },
    {
      name: 'String template interpolation',
      scope: ['string.template variable', 'string variable'],
      settings: {
        foreground: '#cad3f5',
      },
    },
    {
      name: '`new` as bold',
      scope: 'keyword.operator.new',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'C++ extern keyword',
      scope: 'storage.modifier.specifier.extern.cpp',
      settings: {
        foreground: '#c6a0f6',
      },
    },
    {
      name: 'C++ scope resolution',
      scope: [
        'entity.name.scope-resolution.template.call.cpp',
        'entity.name.scope-resolution.parameter.cpp',
        'entity.name.scope-resolution.cpp',
        'entity.name.scope-resolution.function.definition.cpp',
      ],
      settings: {
        foreground: '#eed49f',
      },
    },
    {
      name: 'C++ doc keywords',
      scope: 'storage.type.class.doxygen',
      settings: {
        fontStyle: '',
      },
    },
    {
      name: 'C++ operators',
      scope: ['storage.modifier.reference.cpp'],
      settings: {
        foreground: '#8bd5ca',
      },
    },
    {
      name: 'C# Interpolated Strings',
      scope: 'meta.interpolation.cs',
      settings: {
        foreground: '#cad3f5',
      },
    },
    {
      name: 'C# xml-style docs',
      scope: 'comment.block.documentation.cs',
      settings: {
        foreground: '#cad3f5',
      },
    },
    {
      name: 'Classes, reflecting the className color in JSX',
      scope: [
        'source.css entity.other.attribute-name.class.css',
        'entity.other.attribute-name.parent-selector.css punctuation.definition.entity.css',
      ],
      settings: {
        foreground: '#eed49f',
      },
    },
    {
      name: 'Operators',
      scope: 'punctuation.separator.operator.css',
      settings: {
        foreground: '#8bd5ca',
      },
    },
    {
      name: 'Pseudo classes',
      scope: 'source.css entity.other.attribute-name.pseudo-class',
      settings: {
        foreground: '#8bd5ca',
      },
    },
    {
      scope: 'source.css constant.other.unicode-range',
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      scope: 'source.css variable.parameter.url',
      settings: {
        foreground: '#a6da95',
        fontStyle: '',
      },
    },
    {
      name: 'CSS vendored property names',
      scope: ['support.type.vendored.property-name'],
      settings: {
        foreground: '#91d7e3',
      },
    },
    {
      name: 'Less/SCSS right-hand variables (@/$-prefixed)',
      scope: [
        'source.css meta.property-value variable',
        'source.css meta.property-value variable.other.less',
        'source.css meta.property-value variable.other.less punctuation.definition.variable.less',
        'meta.definition.variable.scss',
      ],
      settings: {
        foreground: '#ee99a0',
      },
    },
    {
      name: 'CSS variables (--prefixed)',
      scope: [
        'source.css meta.property-list variable',
        'meta.property-list variable.other.less',
        'meta.property-list variable.other.less punctuation.definition.variable.less',
      ],
      settings: {
        foreground: '#8aadf4',
      },
    },
    {
      name: 'CSS Percentage values, styled the same as numbers',
      scope: 'keyword.other.unit.percentage.css',
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      name: 'CSS Attribute selectors, styled the same as strings',
      scope: 'source.css meta.attribute-selector',
      settings: {
        foreground: '#a6da95',
      },
    },
    {
      name: 'JSON/YAML keys, other left-hand assignments',
      scope: [
        'keyword.other.definition.ini',
        'punctuation.support.type.property-name.json',
        'support.type.property-name.json',
        'punctuation.support.type.property-name.toml',
        'support.type.property-name.toml',
        'entity.name.tag.yaml',
        'punctuation.support.type.property-name.yaml',
        'support.type.property-name.yaml',
      ],
      settings: {
        foreground: '#8aadf4',
        fontStyle: '',
      },
    },
    {
      name: 'JSON/YAML constants',
      scope: ['constant.language.json', 'constant.language.yaml'],
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      name: 'YAML anchors',
      scope: ['entity.name.type.anchor.yaml', 'variable.other.alias.yaml'],
      settings: {
        foreground: '#eed49f',
        fontStyle: '',
      },
    },
    {
      name: 'TOML tables / ini groups',
      scope: [
        'support.type.property-name.table',
        'entity.name.section.group-title.ini',
      ],
      settings: {
        foreground: '#eed49f',
      },
    },
    {
      name: 'TOML dates',
      scope: 'constant.other.time.datetime.offset.toml',
      settings: {
        foreground: '#f5bde6',
      },
    },
    {
      name: 'YAML anchor puctuation',
      scope: [
        'punctuation.definition.anchor.yaml',
        'punctuation.definition.alias.yaml',
      ],
      settings: {
        foreground: '#f5bde6',
      },
    },
    {
      name: 'YAML triple dashes',
      scope: 'entity.other.document.begin.yaml',
      settings: {
        foreground: '#f5bde6',
      },
    },
    {
      name: 'Markup Diff',
      scope: 'markup.changed.diff',
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      name: 'Diff',
      scope: [
        'meta.diff.header.from-file',
        'meta.diff.header.to-file',
        'punctuation.definition.from-file.diff',
        'punctuation.definition.to-file.diff',
      ],
      settings: {
        foreground: '#8aadf4',
      },
    },
    {
      name: 'Diff Inserted',
      scope: 'markup.inserted.diff',
      settings: {
        foreground: '#a6da95',
      },
    },
    {
      name: 'Diff Deleted',
      scope: 'markup.deleted.diff',
      settings: {
        foreground: '#ed8796',
      },
    },
    {
      name: 'dotenv left-hand side assignments',
      scope: ['variable.other.env'],
      settings: {
        foreground: '#8aadf4',
      },
    },
    {
      name: 'dotenv reference to existing env variable',
      scope: ['string.quoted variable.other.env'],
      settings: {
        foreground: '#cad3f5',
      },
    },
    {
      name: 'GDScript functions',
      scope: 'support.function.builtin.gdscript',
      settings: {
        foreground: '#8aadf4',
      },
    },
    {
      name: 'GDScript constants',
      scope: 'constant.language.gdscript',
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      name: 'Comment keywords',
      scope: 'comment meta.annotation.go',
      settings: {
        foreground: '#ee99a0',
      },
    },
    {
      name: 'go:embed, go:build, etc.',
      scope: 'comment meta.annotation.parameters.go',
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      name: 'Go constants (nil, true, false)',
      scope: 'constant.language.go',
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      name: 'GraphQL variables',
      scope: 'variable.graphql',
      settings: {
        foreground: '#cad3f5',
      },
    },
    {
      name: 'GraphQL aliases',
      scope: 'string.unquoted.alias.graphql',
      settings: {
        foreground: '#f0c6c6',
      },
    },
    {
      name: 'GraphQL enum members',
      scope: 'constant.character.enum.graphql',
      settings: {
        foreground: '#8bd5ca',
      },
    },
    {
      name: 'GraphQL field in types',
      scope:
        'meta.objectvalues.graphql constant.object.key.graphql string.unquoted.graphql',
      settings: {
        foreground: '#f0c6c6',
      },
    },
    {
      name: 'HTML/XML DOCTYPE as keyword',
      scope: [
        'keyword.other.doctype',
        'meta.tag.sgml.doctype punctuation.definition.tag',
        'meta.tag.metadata.doctype entity.name.tag',
        'meta.tag.metadata.doctype punctuation.definition.tag',
      ],
      settings: {
        foreground: '#c6a0f6',
      },
    },
    {
      name: 'HTML/XML-like <tags/>',
      scope: ['entity.name.tag'],
      settings: {
        foreground: '#8aadf4',
        fontStyle: '',
      },
    },
    {
      name: 'Special characters like &amp;',
      scope: [
        'text.html constant.character.entity',
        'text.html constant.character.entity punctuation',
        'constant.character.entity.xml',
        'constant.character.entity.xml punctuation',
        'constant.character.entity.js.jsx',
        'constant.charactger.entity.js.jsx punctuation',
        'constant.character.entity.tsx',
        'constant.character.entity.tsx punctuation',
      ],
      settings: {
        foreground: '#ed8796',
      },
    },
    {
      name: 'HTML/XML tag attribute values',
      scope: ['entity.other.attribute-name'],
      settings: {
        foreground: '#eed49f',
      },
    },
    {
      name: 'Components',
      scope: [
        'support.class.component',
        'support.class.component.jsx',
        'support.class.component.tsx',
        'support.class.component.vue',
      ],
      settings: {
        foreground: '#f5bde6',
        fontStyle: '',
      },
    },
    {
      name: 'Annotations',
      scope: ['punctuation.definition.annotation', 'storage.type.annotation'],
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      name: 'Java enums',
      scope: 'constant.other.enum.java',
      settings: {
        foreground: '#8bd5ca',
      },
    },
    {
      name: 'Java imports',
      scope: 'storage.modifier.import.java',
      settings: {
        foreground: '#cad3f5',
      },
    },
    {
      name: 'Javadoc',
      scope:
        'comment.block.javadoc.java keyword.other.documentation.javadoc.java',
      settings: {
        fontStyle: '',
      },
    },
    {
      name: 'Exported Variable',
      scope: 'meta.export variable.other.readwrite.js',
      settings: {
        foreground: '#ee99a0',
      },
    },
    {
      name: 'JS/TS constants & properties',
      scope: [
        'variable.other.constant.js',
        'variable.other.constant.ts',
        'variable.other.property.js',
        'variable.other.property.ts',
      ],
      settings: {
        foreground: '#cad3f5',
      },
    },
    {
      name: 'JSDoc; these are mainly params, so styled as such',
      scope: [
        'variable.other.jsdoc',
        'comment.block.documentation variable.other',
      ],
      settings: {
        foreground: '#ee99a0',
        fontStyle: '',
      },
    },
    {
      name: 'JSDoc keywords',
      scope: 'storage.type.class.jsdoc',
      settings: {
        fontStyle: '',
      },
    },
    {
      scope: 'support.type.object.console.js',
      settings: {
        foreground: '#cad3f5',
      },
    },
    {
      name: 'Node constants as keywords (module, etc.)',
      scope: ['support.constant.node', 'support.type.object.module.js'],
      settings: {
        foreground: '#c6a0f6',
      },
    },
    {
      name: 'implements as keyword',
      scope: 'storage.modifier.implements',
      settings: {
        foreground: '#c6a0f6',
      },
    },
    {
      name: 'Builtin types',
      scope: [
        'constant.language.null.js',
        'constant.language.null.ts',
        'constant.language.undefined.js',
        'constant.language.undefined.ts',
        'support.type.builtin.ts',
      ],
      settings: {
        foreground: '#c6a0f6',
      },
    },
    {
      scope: 'variable.parameter.generic',
      settings: {
        foreground: '#eed49f',
      },
    },
    {
      name: 'Arrow functions',
      scope: [
        'keyword.declaration.function.arrow.js',
        'storage.type.function.arrow.ts',
      ],
      settings: {
        foreground: '#8bd5ca',
      },
    },
    {
      name: 'Decorator punctuations (decorators inherit from blue functions, instead of styleguide peach)',
      scope: 'punctuation.decorator.ts',
      settings: {
        foreground: '#8aadf4',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Extra JS/TS keywords',
      scope: [
        'keyword.operator.expression.in.js',
        'keyword.operator.expression.in.ts',
        'keyword.operator.expression.infer.ts',
        'keyword.operator.expression.instanceof.js',
        'keyword.operator.expression.instanceof.ts',
        'keyword.operator.expression.is',
        'keyword.operator.expression.keyof.ts',
        'keyword.operator.expression.of.js',
        'keyword.operator.expression.of.ts',
        'keyword.operator.expression.typeof.ts',
      ],
      settings: {
        foreground: '#c6a0f6',
      },
    },
    {
      name: 'Julia macros',
      scope: 'support.function.macro.julia',
      settings: {
        foreground: '#8bd5ca',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Julia language constants (true, false)',
      scope: 'constant.language.julia',
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      name: 'Julia other constants (these seem to be arguments inside arrays)',
      scope: 'constant.other.symbol.julia',
      settings: {
        foreground: '#ee99a0',
      },
    },
    {
      name: 'LaTeX preamble',
      scope: 'text.tex keyword.control.preamble',
      settings: {
        foreground: '#8bd5ca',
      },
    },
    {
      name: 'LaTeX be functions',
      scope: 'text.tex support.function.be',
      settings: {
        foreground: '#91d7e3',
      },
    },
    {
      name: 'LaTeX math',
      scope: 'constant.other.general.math.tex',
      settings: {
        foreground: '#f0c6c6',
      },
    },
    {
      name: 'Lua docstring keywords',
      scope:
        'comment.line.double-dash.documentation.lua storage.type.annotation.lua',
      settings: {
        foreground: '#c6a0f6',
        fontStyle: '',
      },
    },
    {
      name: 'Lua docstring variables',
      scope: [
        'comment.line.double-dash.documentation.lua entity.name.variable.lua',
        'comment.line.double-dash.documentation.lua variable.lua',
      ],
      settings: {
        foreground: '#cad3f5',
      },
    },
    {
      scope: [
        'heading.1.markdown punctuation.definition.heading.markdown',
        'heading.1.markdown',
        'heading.1.quarto punctuation.definition.heading.quarto',
        'heading.1.quarto',
        'markup.heading.atx.1.mdx',
        'markup.heading.atx.1.mdx punctuation.definition.heading.mdx',
        'markup.heading.setext.1.markdown',
        'markup.heading.heading-0.asciidoc',
      ],
      settings: {
        foreground: '#ed8796',
      },
    },
    {
      scope: [
        'heading.2.markdown punctuation.definition.heading.markdown',
        'heading.2.markdown',
        'heading.2.quarto punctuation.definition.heading.quarto',
        'heading.2.quarto',
        'markup.heading.atx.2.mdx',
        'markup.heading.atx.2.mdx punctuation.definition.heading.mdx',
        'markup.heading.setext.2.markdown',
        'markup.heading.heading-1.asciidoc',
      ],
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      scope: [
        'heading.3.markdown punctuation.definition.heading.markdown',
        'heading.3.markdown',
        'heading.3.quarto punctuation.definition.heading.quarto',
        'heading.3.quarto',
        'markup.heading.atx.3.mdx',
        'markup.heading.atx.3.mdx punctuation.definition.heading.mdx',
        'markup.heading.heading-2.asciidoc',
      ],
      settings: {
        foreground: '#eed49f',
      },
    },
    {
      scope: [
        'heading.4.markdown punctuation.definition.heading.markdown',
        'heading.4.markdown',
        'heading.4.quarto punctuation.definition.heading.quarto',
        'heading.4.quarto',
        'markup.heading.atx.4.mdx',
        'markup.heading.atx.4.mdx punctuation.definition.heading.mdx',
        'markup.heading.heading-3.asciidoc',
      ],
      settings: {
        foreground: '#a6da95',
      },
    },
    {
      scope: [
        'heading.5.markdown punctuation.definition.heading.markdown',
        'heading.5.markdown',
        'heading.5.quarto punctuation.definition.heading.quarto',
        'heading.5.quarto',
        'markup.heading.atx.5.mdx',
        'markup.heading.atx.5.mdx punctuation.definition.heading.mdx',
        'markup.heading.heading-4.asciidoc',
      ],
      settings: {
        foreground: '#8aadf4',
      },
    },
    {
      scope: [
        'heading.6.markdown punctuation.definition.heading.markdown',
        'heading.6.markdown',
        'heading.6.quarto punctuation.definition.heading.quarto',
        'heading.6.quarto',
        'markup.heading.atx.6.mdx',
        'markup.heading.atx.6.mdx punctuation.definition.heading.mdx',
        'markup.heading.heading-5.asciidoc',
      ],
      settings: {
        foreground: '#c6a0f6',
      },
    },
    {
      scope: 'markup.bold',
      settings: {
        foreground: '#ed8796',
        fontStyle: 'bold',
      },
    },
    {
      scope: 'markup.italic',
      settings: {
        foreground: '#ed8796',
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.strikethrough',
      settings: {
        foreground: '#a5adcb',
        fontStyle: 'strikethrough',
      },
    },
    {
      name: 'Markdown auto links',
      scope: ['punctuation.definition.link', 'markup.underline.link'],
      settings: {
        foreground: '#8aadf4',
      },
    },
    {
      name: 'Markdown links',
      scope: [
        'text.html.markdown punctuation.definition.link.title',
        'text.html.quarto punctuation.definition.link.title',
        'string.other.link.title.markdown',
        'string.other.link.title.quarto',
        'markup.link',
        'punctuation.definition.constant.markdown',
        'punctuation.definition.constant.quarto',
        'constant.other.reference.link.markdown',
        'constant.other.reference.link.quarto',
        'markup.substitution.attribute-reference',
      ],
      settings: {
        foreground: '#b7bdf8',
      },
    },
    {
      name: 'Markdown code spans',
      scope: [
        'punctuation.definition.raw.markdown',
        'punctuation.definition.raw.quarto',
        'markup.inline.raw.string.markdown',
        'markup.inline.raw.string.quarto',
        'markup.raw.block.markdown',
        'markup.raw.block.quarto',
      ],
      settings: {
        foreground: '#a6da95',
      },
    },
    {
      name: 'Markdown triple backtick language identifier',
      scope: 'fenced_code.block.language',
      settings: {
        foreground: '#91d7e3',
      },
    },
    {
      name: 'Markdown triple backticks',
      scope: [
        'markup.fenced_code.block punctuation.definition',
        'markup.raw support.asciidoc',
      ],
      settings: {
        foreground: '#939ab7',
      },
    },
    {
      name: 'Markdown quotes',
      scope: ['markup.quote', 'punctuation.definition.quote.begin'],
      settings: {
        foreground: '#f5bde6',
      },
    },
    {
      name: 'Markdown separators',
      scope: 'meta.separator.markdown',
      settings: {
        foreground: '#8bd5ca',
      },
    },
    {
      name: 'Markdown list bullets',
      scope: [
        'punctuation.definition.list.begin.markdown',
        'punctuation.definition.list.begin.quarto',
        'markup.list.bullet',
      ],
      settings: {
        foreground: '#8bd5ca',
      },
    },
    {
      name: 'Quarto headings',
      scope: 'markup.heading.quarto',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'Nix attribute names',
      scope: [
        'entity.other.attribute-name.multipart.nix',
        'entity.other.attribute-name.single.nix',
      ],
      settings: {
        foreground: '#8aadf4',
      },
    },
    {
      name: 'Nix parameter names',
      scope: 'variable.parameter.name.nix',
      settings: {
        foreground: '#cad3f5',
        fontStyle: '',
      },
    },
    {
      name: 'Nix interpolated parameter names',
      scope: 'meta.embedded variable.parameter.name.nix',
      settings: {
        foreground: '#b7bdf8',
        fontStyle: '',
      },
    },
    {
      name: 'Nix paths',
      scope: 'string.unquoted.path.nix',
      settings: {
        foreground: '#f5bde6',
        fontStyle: '',
      },
    },
    {
      name: 'PHP Attributes',
      scope: ['support.attribute.builtin', 'meta.attribute.php'],
      settings: {
        foreground: '#eed49f',
      },
    },
    {
      name: 'PHP Parameters (needed for the leading dollar sign)',
      scope: 'meta.function.parameters.php punctuation.definition.variable.php',
      settings: {
        foreground: '#ee99a0',
      },
    },
    {
      name: 'PHP Constants (null, __FILE__, etc.)',
      scope: 'constant.language.php',
      settings: {
        foreground: '#c6a0f6',
      },
    },
    {
      name: 'PHP functions',
      scope: 'text.html.php support.function',
      settings: {
        foreground: '#91d7e3',
      },
    },
    {
      name: 'PHPdoc keywords',
      scope: 'keyword.other.phpdoc.php',
      settings: {
        fontStyle: '',
      },
    },
    {
      name: 'Python argument functions reset to text, otherwise they inherit blue from function-call',
      scope: [
        'support.variable.magic.python',
        'meta.function-call.arguments.python',
      ],
      settings: {
        foreground: '#cad3f5',
      },
    },
    {
      name: 'Python double underscore functions',
      scope: ['support.function.magic.python'],
      settings: {
        foreground: '#91d7e3',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Python `self` keyword',
      scope: [
        'variable.parameter.function.language.special.self.python',
        'variable.language.special.self.python',
      ],
      settings: {
        foreground: '#ed8796',
        fontStyle: 'normal',
      },
    },
    {
      name: 'python keyword flow/logical (for ... in)',
      scope: ['keyword.control.flow.python', 'keyword.operator.logical.python'],
      settings: {
        foreground: '#c6a0f6',
      },
    },
    {
      name: 'python storage type',
      scope: 'storage.type.function.python',
      settings: {
        foreground: '#c6a0f6',
      },
    },
    {
      name: 'python function support',
      scope: [
        'support.token.decorator.python',
        'meta.function.decorator.identifier.python',
      ],
      settings: {
        foreground: '#91d7e3',
      },
    },
    {
      name: 'python function calls',
      scope: ['meta.function-call.python'],
      settings: {
        foreground: '#8aadf4',
      },
    },
    {
      name: 'python function decorators',
      scope: [
        'entity.name.function.decorator.python',
        'punctuation.definition.decorator.python',
      ],
      settings: {
        foreground: '#f5a97f',
        fontStyle: 'normal',
      },
    },
    {
      name: 'python placeholder reset to normal string',
      scope: 'constant.character.format.placeholder.other.python',
      settings: {
        foreground: '#f5bde6',
      },
    },
    {
      name: 'Python exception & builtins such as exit()',
      scope: [
        'support.type.exception.python',
        'support.function.builtin.python',
      ],
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      name: 'entity.name.type',
      scope: ['support.type.python'],
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      name: 'python constants (True/False)',
      scope: 'constant.language.python',
      settings: {
        foreground: '#c6a0f6',
      },
    },
    {
      name: 'Arguments accessed later in the function body',
      scope: ['meta.indexed-name.python', 'meta.item-access.python'],
      settings: {
        foreground: '#ee99a0',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Python f-strings/binary/unicode storage types',
      scope: 'storage.type.string.python',
      settings: {
        foreground: '#a6da95',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Python type hints',
      scope: 'meta.function.parameters.python',
      settings: {
        fontStyle: '',
      },
    },
    {
      name: 'Regex string begin/end in JS/TS',
      scope: [
        'string.regexp punctuation.definition.string.begin',
        'string.regexp punctuation.definition.string.end',
      ],
      settings: {
        foreground: '#f5bde6',
      },
    },
    {
      name: 'Regex anchors (^, $)',
      scope: 'keyword.control.anchor.regexp',
      settings: {
        foreground: '#c6a0f6',
      },
    },
    {
      name: 'Regex regular string match',
      scope: 'string.regexp.ts',
      settings: {
        foreground: '#cad3f5',
      },
    },
    {
      name: 'Regex group parenthesis & backreference (\\1, \\2, \\3, ...)',
      scope: [
        'punctuation.definition.group.regexp',
        'keyword.other.back-reference.regexp',
      ],
      settings: {
        foreground: '#a6da95',
      },
    },
    {
      name: 'Regex character class []',
      scope: 'punctuation.definition.character-class.regexp',
      settings: {
        foreground: '#eed49f',
      },
    },
    {
      name: 'Regex character classes (\\d, \\w, \\s)',
      scope: 'constant.other.character-class.regexp',
      settings: {
        foreground: '#f5bde6',
      },
    },
    {
      name: 'Regex range',
      scope: 'constant.other.character-class.range.regexp',
      settings: {
        foreground: '#f4dbd6',
      },
    },
    {
      name: 'Regex quantifier',
      scope: 'keyword.operator.quantifier.regexp',
      settings: {
        foreground: '#8bd5ca',
      },
    },
    {
      name: 'Regex constant/numeric',
      scope: 'constant.character.numeric.regexp',
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      name: 'Regex lookaheads, negative lookaheads, lookbehinds, negative lookbehinds',
      scope: [
        'punctuation.definition.group.no-capture.regexp',
        'meta.assertion.look-ahead.regexp',
        'meta.assertion.negative-look-ahead.regexp',
      ],
      settings: {
        foreground: '#8aadf4',
      },
    },
    {
      name: 'Rust attribute',
      scope: [
        'meta.annotation.rust',
        'meta.annotation.rust punctuation',
        'meta.attribute.rust',
        'punctuation.definition.attribute.rust',
      ],
      settings: {
        foreground: '#eed49f',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Rust attribute strings',
      scope: [
        'meta.attribute.rust string.quoted.double.rust',
        'meta.attribute.rust string.quoted.single.char.rust',
      ],
      settings: {
        fontStyle: '',
      },
    },
    {
      name: 'Rust keyword',
      scope: [
        'entity.name.function.macro.rules.rust',
        'storage.type.module.rust',
        'storage.modifier.rust',
        'storage.type.struct.rust',
        'storage.type.enum.rust',
        'storage.type.trait.rust',
        'storage.type.union.rust',
        'storage.type.impl.rust',
        'storage.type.rust',
        'storage.type.function.rust',
        'storage.type.type.rust',
      ],
      settings: {
        foreground: '#c6a0f6',
        fontStyle: '',
      },
    },
    {
      name: 'Rust u/i32, u/i64, etc.',
      scope: 'entity.name.type.numeric.rust',
      settings: {
        foreground: '#c6a0f6',
        fontStyle: '',
      },
    },
    {
      name: 'Rust generic',
      scope: 'meta.generic.rust',
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      name: 'Rust impl',
      scope: 'entity.name.impl.rust',
      settings: {
        foreground: '#eed49f',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Rust module',
      scope: 'entity.name.module.rust',
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      name: 'Rust trait',
      scope: 'entity.name.trait.rust',
      settings: {
        foreground: '#eed49f',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Rust struct',
      scope: 'storage.type.source.rust',
      settings: {
        foreground: '#eed49f',
      },
    },
    {
      name: 'Rust union',
      scope: 'entity.name.union.rust',
      settings: {
        foreground: '#eed49f',
      },
    },
    {
      name: 'Rust enum member',
      scope: 'meta.enum.rust storage.type.source.rust',
      settings: {
        foreground: '#8bd5ca',
      },
    },
    {
      name: 'Rust macro',
      scope: [
        'support.macro.rust',
        'meta.macro.rust support.function.rust',
        'entity.name.function.macro.rust',
      ],
      settings: {
        foreground: '#8aadf4',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Rust lifetime',
      scope: ['storage.modifier.lifetime.rust', 'entity.name.type.lifetime'],
      settings: {
        foreground: '#8aadf4',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Rust string formatting',
      scope: 'string.quoted.double.rust constant.other.placeholder.rust',
      settings: {
        foreground: '#f5bde6',
      },
    },
    {
      name: 'Rust return type generic',
      scope:
        'meta.function.return-type.rust meta.generic.rust storage.type.rust',
      settings: {
        foreground: '#cad3f5',
      },
    },
    {
      name: 'Rust functions',
      scope: 'meta.function.call.rust',
      settings: {
        foreground: '#8aadf4',
      },
    },
    {
      name: 'Rust angle brackets',
      scope: 'punctuation.brackets.angle.rust',
      settings: {
        foreground: '#91d7e3',
      },
    },
    {
      name: 'Rust constants',
      scope: 'constant.other.caps.rust',
      settings: {
        foreground: '#f5a97f',
      },
    },
    {
      name: 'Rust function parameters',
      scope: ['meta.function.definition.rust variable.other.rust'],
      settings: {
        foreground: '#ee99a0',
      },
    },
    {
      name: 'Rust closure variables',
      scope: 'meta.function.call.rust variable.other.rust',
      settings: {
        foreground: '#cad3f5',
      },
    },
    {
      name: 'Rust self',
      scope: 'variable.language.self.rust',
      settings: {
        foreground: '#ed8796',
      },
    },
    {
      name: 'Rust metavariable names',
      scope: [
        'variable.other.metavariable.name.rust',
        'meta.macro.metavariable.rust keyword.operator.macro.dollar.rust',
      ],
      settings: {
        foreground: '#f5bde6',
      },
    },
    {
      name: 'Shell shebang',
      scope: [
        'comment.line.shebang',
        'comment.line.shebang punctuation.definition.comment',
        'comment.line.shebang',
        'punctuation.definition.comment.shebang.shell',
        'meta.shebang.shell',
      ],
      settings: {
        foreground: '#f5bde6',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Shell shebang command',
      scope: 'comment.line.shebang constant.language',
      settings: {
        foreground: '#8bd5ca',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Shell interpolated command',
      scope: [
        'meta.function-call.arguments.shell punctuation.definition.variable.shell',
        'meta.function-call.arguments.shell punctuation.section.interpolation',
        'meta.function-call.arguments.shell punctuation.definition.variable.shell',
        'meta.function-call.arguments.shell punctuation.section.interpolation',
      ],
      settings: {
        foreground: '#ed8796',
      },
    },
    {
      name: 'Shell interpolated command variable',
      scope:
        'meta.string meta.interpolation.parameter.shell variable.other.readwrite',
      settings: {
        foreground: '#f5a97f',
        fontStyle: 'normal',
      },
    },
    {
      scope: [
        'source.shell punctuation.section.interpolation',
        'punctuation.definition.evaluation.backticks.shell',
      ],
      settings: {
        foreground: '#8bd5ca',
      },
    },
    {
      name: 'Shell EOF',
      scope: 'entity.name.tag.heredoc.shell',
      settings: {
        foreground: '#c6a0f6',
      },
    },
    {
      name: 'Shell quoted variable',
      scope: 'string.quoted.double.shell variable.other.normal.shell',
      settings: {
        foreground: '#cad3f5',
      },
    },
  ],
}

export default theme