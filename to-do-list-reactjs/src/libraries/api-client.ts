import apiClientAdvanced from "./api-client-advanced";
import apiClientSimple from "./api-client-simple";


const mode: 'simple' | 'advanced' = 'simple';

const apiClient = mode === 'simple' ? apiClientSimple : apiClientAdvanced; // Default export for simplicity

export { apiClient }; // Export both for flexibility