using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class intialmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "jexcelDemo",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Hospitalization = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Amount = table.Column<int>(nullable: false),
                    Rate = table.Column<int>(nullable: false),
                    Frequency = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    Duration = table.Column<int>(nullable: false),
                    stage = table.Column<int>(nullable: false),
                    startMonth = table.Column<int>(nullable: false),
                    EndMonth = table.Column<int>(nullable: false),
                    SUnits = table.Column<int>(nullable: false),
                    PUnits = table.Column<int>(nullable: false),
                    Comments = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_jexcelDemo", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "jexcelDemo");
        }
    }
}
