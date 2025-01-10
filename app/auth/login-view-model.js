import { Observable } from '@nativescript/core';
import { navigate } from '@nativescript/core/ui/frame';

export function createViewModel() {
    const viewModel = new Observable();
    
    viewModel.email = "";
    viewModel.password = "";
    viewModel.errorMessage = "";

    viewModel.onLogin = async () => {
        if (!viewModel.email || !viewModel.password) {
            viewModel.set('errorMessage', 'Please fill in all fields');
            return;
        }
        
        // TODO: Implement actual authentication logic here
        if (viewModel.email === "test@test.com" && viewModel.password === "password") {
            navigate({
                moduleName: "main-page",
                clearHistory: true
            });
        } else {
            viewModel.set('errorMessage', 'Invalid credentials');
        }
    };

    viewModel.onNavigateToRegister = () => {
        navigate({
            moduleName: "auth/register-page"
        });
    };

    return viewModel;
}