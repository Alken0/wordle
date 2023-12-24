export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = [
  'Großartige Arbeit!',
  'Fantastisch!',
  'Gut gemacht!',
  'Hervorragend!',
]
export const GAME_COPIED_MESSAGE = 'Spiel in die Zwischenablage kopiert'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Nicht genügend Buchstaben'
export const WORD_NOT_FOUND_MESSAGE = 'Wort nicht gefunden'
export const HARD_MODE_ALERT_MESSAGE =
  'Der schwere Modus kann nur beim Start aktiviert werden!'
export const HARD_MODE_DESCRIPTION =
  'Alle aufgedeckten Buchstaben müssen bei den folgenden Versuchen verwendet werden'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Für besseres Farbsehen'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Das Wort war ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Muss ${guess} in Position ${position} verwenden`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Versuch muss ${letter} enthalten`
export const ENTER_TEXT = 'Eingabe'
export const DELETE_TEXT = 'Löschen'
export const STATISTICS_TITLE = 'Statistiken'
export const GUESS_DISTRIBUTION_TEXT = 'Übersicht'
export const NEW_WORD_TEXT = 'Neues Wort in'
export const SHARE_TEXT = 'Teilen'
export const SHARE_FAILURE_TEXT =
  'Die Ergebnisse können nicht geteilt werden. Diese Funktion ist nur mit sicherer Verbindung (HTTPS) in einigen oder allen unterstützten Browsern verfügbar.'
export const MIGRATE_BUTTON_TEXT = 'Übertragen'
export const MIGRATE_DESCRIPTION_TEXT =
  'Klicken Sie hier, um Ihre Statistiken auf ein neues Gerät zu übertragen.'
export const TOTAL_TRIES_TEXT = 'Versuche insgesamt'
export const SUCCESS_RATE_TEXT = 'Erfolgsrate'
export const CURRENT_STREAK_TEXT = 'Aktuelle Streak'
export const BEST_STREAK_TEXT = 'Beste Streak'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  'Sie verwenden einen eingebetteten Browser und haben möglicherweise Probleme beim Teilen oder Speichern Ihrer Ergebnisse. Wir empfehlen Ihnen, lieber den Standardbrowser Ihres Geräts zu verwenden.'

export const DATEPICKER_TITLE = 'Wählen Sie ein vergangenes Datum'
export const DATEPICKER_CHOOSE_TEXT = 'Auswählen'
export const DATEPICKER_TODAY_TEXT = 'Heute'
export const ARCHIVE_GAMEDATE_TEXT = 'Datem des Spiels'
