import { RegistrationForm } from "widgets/registrationForm";
import { AuthContainer } from "shared/ui/authContainer";

export function Registration() {
    return (
        <AuthContainer>
            <RegistrationForm />
        </AuthContainer>
    );
}
