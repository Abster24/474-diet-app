const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById("loginButton").addEventListener("click", async (event) => {
  event.preventDefault(); 
  await signIn(); 
});

async function checkUserSession() {
    const { data: { session } } = await supabase.auth.getSession();
}
  
async function signUp() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  
  const { data, error } = await supabase.auth.signUp({ email, password });
    
  if (error) {
      console.error("Signup Error:", error.message);
  } else {
    console.log("User signed up:", data);
    alert("Check your email to confirm your account!");
  }
}
  
async function signIn() {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    
  if (error) {
    console.error("Login Error:", error.message);
  } else {
    console.log("User logged in:", data);
    sessionStorage.setItem("userId", data.user.id); 
    fetchUserData(data.user.id);

     // Hide the modal
     const modal = document.getElementById("loginModal");
        modal.style.display = "none";
  }
}
  
async function signOut() {
  await supabase.auth.signOut();
  sessionStorage.removeItem("userId");
  console.log("User signed out");
}
      
  async function fetchUserData() {
  
    try {
      const { data: user, error } = await supabase.auth.getUser();
      console.log(user);
    }
      catch (error) {
        console.error("Error fetching user data:", error.message);
        return;
    }
  }