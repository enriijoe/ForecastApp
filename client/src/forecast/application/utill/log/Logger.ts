enum LogType {
    INFO = "info",
    ERROR = "error",
    DEBUG = "debug"
}

export class Logger {

    public static readonly DATE_FORMAT_OPTIONS = {
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        month: "2-digit",
        second: "2-digit",
        weekday: "narrow",
        year: "2-digit"
    };

    public static readonly FORMAT: string = "[%date% # %type%]: <%message%>";

    private static formatMessage(type: string, message: string): string {
        return Logger.FORMAT
        .replace(/%type%/, type)
        .replace(/%message%/, message)
        .replace(/%date%/, new Date().toLocaleString("en-us", Logger.DATE_FORMAT_OPTIONS));
    }

    public info(message: string): void {
        // tslint:disable-next-line
        console.info(Logger.formatMessage(LogType.INFO, message));
    }

    public error(message: string): void {
        // tslint:disable-next-line
        console.error(Logger.formatMessage(LogType.ERROR, message));
    }

    public debug(message: string): void {
        // tslint:disable-next-line
        console.debug(Logger.formatMessage(LogType.DEBUG, message));
    }

}
