import { Observable } from '@nativescript/core';
import { navigate } from '@nativescript/core/ui/frame';

export function createViewModel() {
    const viewModel = new Observable();
    
    viewModel.email = "";
    viewModel.password = "";
    viewModel.confirmPassword = "";
    viewModel.errorMessage = "";

    viewModel.onRegister = async () => {
        if (!viewModel.email || !viewModel.password || !viewModel.confirmPassword) {
            viewModel.set('errorMessage', 'Please fill in all fields');
            return;
        }

        if (viewModel.password !== viewModel.confirmPassword) {
            viewModel.set('errorMessage', 'Passwords do not match');
            return;
        }

        // TODO: Implement actual registration logic here
        navigate({
            moduleName: "auth/login-page",
            clearHistory: true
        });
    };

    viewModel.onNavigateToLogin = () => {
        navigate({
            moduleName: "auth/login-page"
        });
    };

    return viewModel;
}