<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="DesignerPage.aspx.cs" Inherits="ReportWebApplication.DesignerPage" %>

<%@ Register Assembly="DevExpress.Dashboard.v19.1.Web.WebForms, Version=19.1.3.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.DashboardWeb" TagPrefix="dx" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <dx:ASPxDashboard ID="ASPxDashboard1" runat="server" Width="100%" Height="100%" DashboardStorageFolder="~/App_Data/Dashboards" EnableCustomSql="True" AllowExecutingCustomSql="True">
       <ClientSideEvents BeforeRender="onBeforeRender" />
    </dx:ASPxDashboard>
</asp:Content>


