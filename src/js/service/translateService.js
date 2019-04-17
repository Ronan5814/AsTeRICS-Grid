var translateService = {};

/**
 *
 */
translateService.getLang = function () {
    return navigator.language.substring(0,2).toLowerCase();
};

translateService.translate = function (key) {
    var lang = this.translations[this.getLang()] ? this.getLang() : 'en';
    var translated = this.translations[lang][key] ? this.translations[lang][key] : key;
    for(var i=1; i<arguments.length; i++) {
        translated = translated.replace('{?}', arguments[i]);
    }
    return translated;
};

translateService.translations = {};
translateService.translations['en'] = {
    GridActionSpeak: 'Speak label',
    GridActionSpeakCustom: 'Speak custom text',
    GridActionNavigate: 'Navigate to other grid',
    GridActionARE: 'AsTeRICS action',
    CONFIRM_IMPORT_BACKUP: 'Do you really want to restore the backup from "{?}"? Warning: This will delete the current configuration and grids! This operation cannot be undone!',
    CONFIRM_DELETE_GRID: 'Do you really want to delete the grid "{?}"?',
    CONFIRM_RESET_DB: 'Do you really want to reset the database? All grids will be deleted! This operation cannot be undone!',
    CONFIRM_DELETE_ALL_ELEMS: 'Do you really want to delete all elements of the current grid?',
    CONFIRM_REMOVE_USER: 'Do you really want to unlink account "{?}"? This will not delete the account itself, but all locally stored data of it.',
    ERROR_IMPORT_SAMEID: 'Grid "{?}" cannot be imported because it has the same ID as an already existing grid! Maybe this file was already imported before?!',
    PLACEHOLDER_SEARCH_GRID: 'Search grid',
    LABEL_USER_LOCAL: 'locally saved user',
    LABEL_USER_CLOUD: 'user synced with the cloud',
    LABEL_USER_ONLINE: 'only online, no local synchronization',
    ERROR_CODE_UNAUTHORIZED: 'Login failed, wrong username or password.',
    ERROR_CODE_NETWORK_ERROR: 'Login failed (network error), please try again later.',
    DB_SYNC_STATE_SYNCINC: 'synchronizing with cloud...',
    DB_SYNC_STATE_SYNCED: 'synchronized with cloud',
    DB_SYNC_STATE_STOPPED: 'synchronization with cloud paused',
    DB_SYNC_STATE_FAIL: 'not synchronizing with cloud',
    DB_SYNC_STATE_ONLINEONLY: 'online-only, no offline synchronization',
    de: 'German',
    en: 'English',
    es: 'Spanish',
    fr: 'French',
    hi: 'Hindi',
    id: 'Indonesian',
    it: 'Italian',
    ja: 'Japanese',
    ko: 'Korean',
    nl: 'Dutch',
    pl: 'Polish',
    pt: 'Portuguese',
    ru: 'Russian',
    zh: 'Chinese'
};

translateService.translations['de'] = {
    GridActionSpeak: 'Label aussprechen',
    GridActionSpeakCustom: 'Benutzerdefinierten Text aussprechen',
    GridActionNavigate: 'Zu anderem Grid navigieren',
    GridActionARE: 'AsTeRICS Aktion',
    CONFIRM_IMPORT_BACKUP: 'Möchten Sie wirklich das Backup von "{?}" wiederherstellen? Warnung: Diese Aktion wird die aktuelle Konfiguration und alle Grids löschen und kann nicht rückgängig gemacht werden!',
    CONFIRM_DELETE_GRID: 'Möchten Sie das Grid "{?}" wirklich löschen?',
    CONFIRM_RESET_DB: 'Möchten Sie wirklich die Datenbank zurücksetzen? Alle Grids werden dadurch gelöscht und diese Aktion kann nicht rückgängig gemacht werden!',
    CONFIRM_DELETE_ALL_ELEMS: 'Möchten Sie wirklich alle Elemente des aktuellen Grids löschen?',
    CONFIRM_REMOVE_USER: 'Möchten Sie den Account "{?}" wirklich von diesem Gerät abmelden? Diese Aktion löscht nicht den Account, aber alle Daten des Accounts auf diesem Gerät.',
    ERROR_IMPORT_SAMEID: 'Grid "{?}" konnte nicht importiert werden, da es dieselbe ID wie ein bereits bestehendes Grid hat! Eventuell wurde das File bereits importiert?!',
    PLACEHOLDER_SEARCH_GRID: 'Grid suchen',
    LABEL_USER_LOCAL: 'lokal gespeicherter User',
    LABEL_USER_CLOUD: 'mit Cloud synchronisierter User',
    LABEL_USER_ONLINE: 'nur online, keine lokale Synchronisation',
    ERROR_CODE_UNAUTHORIZED: 'Login fehlgeschlagen, falscher Benutzername oder Passwort.',
    ERROR_CODE_NETWORK_ERROR: 'Login fehlgeschlagen (Netzwerkproblem), bitte versuchen Sie es später nochmal.',
    DB_SYNC_STATE_SYNCINC: 'synchronisiere mit Cloud...',
    DB_SYNC_STATE_SYNCED: 'Mit Cloud synchronisiert',
    DB_SYNC_STATE_STOPPED: 'Synchronisation mit Cloud pausiert',
    DB_SYNC_STATE_FAIL: 'Keine Synchronisierung mit Cloud',
    DB_SYNC_STATE_ONLINEONLY: 'nur online, keine Offline-Synchronisierung',
    de: 'Deutsch',
    en: 'Englisch',
    es: 'Spanisch',
    fr: 'Französisch',
    hi: 'Hindi',
    id: 'Indonesisch',
    it: 'Italienisch',
    ja: 'Japanisch',
    ko: 'Koreanisch',
    nl: 'Holländisch',
    pl: 'Polnisch',
    pt: 'Portugiesisch',
    ru: 'Russisch',
    zh: 'Chinesisch'
};

export {translateService};