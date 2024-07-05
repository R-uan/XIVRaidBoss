export default function Ensure<T>(value: T | null | undefined, message: string) {
	if (value == null || value == undefined) throw new Error(message);
	return value;
}
