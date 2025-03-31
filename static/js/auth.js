firebase.auth().onAuthStateChanged(user => {
    if (user) {
        document.cookie = `userName=${encodeURIComponent(user.displayName || "Guest")}; path=/`;
        document.cookie = `userEmail=${encodeURIComponent(user.email || "No email available")}; path=/`;
        document.cookie = `userProfilePic=${encodeURIComponent(user.photoURL || "/static/assets/default-profile.png")}; path=/`;
        document.cookie = `userCreationTime=${encodeURIComponent(user.metadata.creationTime || "Unknown")}; path=/`;
    } else {
        console.log("User not logged in");
    }
});
