class User
{
    //public properties(setters and getters)
    get FirstName()
    {
        return this.m_firstName;
    }

    set FirstName(firstName)
    {
        this.m_firstName = firstName;
    }

    get LastName()
    {
        return this.m_lastName;
    }

    set LastName(lastName)
    {
        this.m_lastName = lastName;
    }

    get UserName()
    {
        return this.m_userName;
    }

    set UserName(userName)
    {
        this.m_userName = userName;
    }

    get EmailAddress()
    {
        return this.m_emailAddress;
    }

    set EmailAddress(emailAddress)
    {
        this.m_emailAddress = emailAddress;
    }

    get Password()
    {
        return this.m_password;
    }

    set Password(password)
    {
        this.m_password = password;
    }

    //constructor
    constructor(firstName, lastName, userName, emailAddress, password)
    {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.UserName = userName;
        this.EmailAddress = emailAddress;
        this.Password = password;
    }

    //public overrrides
    toString()
    {
        return `First Name: ${this.FirstName}\n Last Name: ${this.LastName}\n Username: ${this.UserName}\n Email Address: ${this.EmailAddress}\n Password: ${this.Password}`;
    }
}