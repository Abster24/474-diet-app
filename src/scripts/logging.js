import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const supabaseUrl = 'https://rchvxwxhggxncpajpqvf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjaHZ4d3hoZ2d4bmNwYWpwcXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwODQ2NDksImV4cCI6MjA1ODY2MDY0OX0.e3xnV60dS7tMXgPjlcjmy3QgMQMD-SVaM78EJ4OEIIQ'
const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById("loginButton").addEventListener("click", async (event) => {
  event.preventDefault(); 
  await signIn(); 
});

document.getElementById("logoutButton").addEventListener("click", async (event) => {
  event.preventDefault(); 
  await signOut(); 
});
  
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
    sessionStorage.setItem("userId", data.user.id); 
    fetchUserData(data.user.id);

     // Hide the modal
     const modal = document.getElementById("loginModal");
        modal.style.display = "none"; 
      const logout = document.getElementById("logoutButton");
        logout.style.display = "inline";
  }
}
  
async function signOut() {
  await supabase.auth.signOut();
  sessionStorage.removeItem("userId");
  console.log("User signed out");
  const logout = document.getElementById("logoutButton");
  logout.style.display = "none"; 
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