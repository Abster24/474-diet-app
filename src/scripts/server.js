import { supabase } from './supabase.js'; // Import the Supabase client

fetchAccountData();

export async function fetchAccountData() {
    let loginId; // Declare loginId outside the try block

    try {
        loginId = sessionStorage.getItem("userId"); // Retrieve user ID from session storage
        if (!loginId) {
            console.error("No user ID found in sessionStorage.");
            return;
        }
    } catch (error) {
        console.error("Error retrieving user ID:", error.message);
        return;
    }

    try {
        const { data, error } = await supabase
            .from('customers') // Table name
            .select(' *, customer_allergies(idallergies, Allergies(allergyName))') // Columns to fetch
            .eq('customerLoginId', loginId); // 'Where' clause

        if (error) {
            console.error('Error fetching account data:', error);
            return;
        }

        if (data.length > 0) {
            displayData(data); 
        } else {
            console.warn('No customer data found.');
            document.getElementById('customer-info').textContent = 'No customer information available.';
        }
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}

async function displayData(customer) {
  try {
    document.getElementById('account-name').textContent = `Name: ${customer[0].customerFName} ${customer[0].customerLName}`;
    document.getElementById('account-age').textContent = `Age: ${customer[0].customerAge}`;
    const allergies = customer[0].customer_allergies.map(allergy => allergy.Allergies.allergyName).join(', ');
    document.getElementById('account-conditions').textContent = `Conditions: ${allergies || 'None'}`;
    } 
    catch (err) {
        console.error('Error processing customer data:',);
        return;
    }
}


