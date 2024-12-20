        // Show a popup when the user signs in
        document.getElementById('signInForm').addEventListener('submit', function (e) {
            e.preventDefault();
            alert('You have successfully signed in!');
        });

        // Replace the form for Sign Up
        document.getElementById('signUpLink').addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.signup-container').innerHTML = `
                <h1 class="text-center mb-4 fw-bold">Sign Up</h1>
                <form id="signUpForm">
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Username" id="newUsername">
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Email" id="email">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" placeholder="Password" id="newPassword">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" placeholder="Confirm Password" id="confirmPassword">
                    </div>
                    <div class="d-grid">
                        <button type="submit" class="btn btn-custom">SIGN UP</button>
                    </div>
                </form>
            `;
        });