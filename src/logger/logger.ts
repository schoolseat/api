export type LoggerLevels = 'info'

export type Logger = {
  [Level in LoggerLevels]: (...messages: string[]) => void
}

export const logger: Logger = {
  info(...messages: string[]): void {
    console.log(messages.join('\n'))
  },
}
