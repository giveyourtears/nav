using Microsoft.EntityFrameworkCore.Migrations;

namespace navigator.Migrations
{
    public partial class images : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Images",
                table: "Tours");

            migrationBuilder.DropColumn(
                name: "Images",
                table: "Regions");

            migrationBuilder.DropColumn(
                name: "Images",
                table: "CruisesPage");

            migrationBuilder.DropColumn(
                name: "Images",
                table: "Cruises");

            migrationBuilder.DropColumn(
                name: "Images",
                table: "Countries");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Images",
                table: "Tours",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Images",
                table: "Regions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Images",
                table: "CruisesPage",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Images",
                table: "Cruises",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Images",
                table: "Countries",
                nullable: true);
        }
    }
}
